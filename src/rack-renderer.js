import * as THREE from 'three'
import { createAssets } from './rack-geometry.js'
import { cabinet, floor, levels } from './rack-layout.js'

const { Vector3, Box3, MathUtils } = THREE
const overview = {x:.90,y:.40,z:0,yaw:.51,pitch:.62,width:12.94,height:6.25,zoom:1}
const colors = {selected:'#d35a31', placement:'#a34726', swap:'#a56b1c'}
const stateColors = {testing:'#0bb483',off:'#535f65',failed:'#dc4845'}

function contactTexture() {
  const canvas=document.createElement('canvas')
  canvas.width=canvas.height=96
  const ctx=canvas.getContext('2d')
  const shadow=ctx.createRadialGradient(48,48,13,48,48,47)
  shadow.addColorStop(0,'rgba(8,17,20,.68)')
  shadow.addColorStop(.55,'rgba(8,17,20,.48)')
  shadow.addColorStop(1,'rgba(8,17,20,0)')
  ctx.fillStyle=shadow
  ctx.fillRect(0,0,96,96)
  const texture=new THREE.CanvasTexture(canvas)
  texture.colorSpace=THREE.SRGBColorSpace
  return texture
}

function labelSprite(text, active) {
  const canvas=document.createElement('canvas')
  canvas.width=256
  canvas.height=64
  const ctx=canvas.getContext('2d')
  ctx.fillStyle=active ? '#fcebdd' : '#353029'
  ctx.strokeStyle=active ? '#fcebdd' : '#9a8a78'
  ctx.lineWidth=3
  ctx.beginPath()
  ctx.roundRect(3,3,250,58,8)
  ctx.fill()
  ctx.stroke()
  ctx.font='600 39px "Cascadia Mono", Consolas, monospace'
  ctx.textAlign='center'
  ctx.textBaseline='middle'
  ctx.fillStyle=active ? '#7e301c' : '#fff8ec'
  ctx.fillText(text,128,34,238)
  const map=new THREE.CanvasTexture(canvas)
  map.colorSpace=THREE.SRGBColorSpace
  const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map,alphaTest:.4,toneMapped:false}))
  sprite.scale.set(.307,.077,1)
  return sprite
}

function disposeLabel(sprite) {
  sprite.removeFromParent()
  sprite.material.map.dispose()
  sprite.material.dispose()
}

export function createRackRenderer(canvas, stage, {locations,positions,assignments}, markers) {
  const gl=new THREE.WebGLRenderer({canvas,antialias:true})
  gl.setPixelRatio(Math.min(devicePixelRatio,1.8))
  gl.toneMapping=THREE.ACESFilmicToneMapping
  gl.toneMappingExposure=1.06
  gl.shadowMap.enabled=true
  gl.shadowMap.autoUpdate=false
  const scene=new THREE.Scene()
  scene.background=new THREE.Color('#ede8df')
  const camera=new THREE.OrthographicCamera(-6,6,3,-3,.1,50)
  const eye=new THREE.PerspectiveCamera(62,1,.035,50)
  const sky=new THREE.HemisphereLight('#fcf7ee','#7d756a',1.27)
  const key=new THREE.DirectionalLight('#fff2e2',2.72)
  key.position.set(-4.7,8.8,5.6)
  key.castShadow=true
  key.shadow.mapSize.set(1536,1536)
  key.shadow.radius=3
  key.shadow.normalBias=.024
  key.shadow.bias=-.00013
  Object.assign(key.shadow.camera,{left:-7.5,right:7.5,bottom:-6,top:6,far:28})
  key.shadow.camera.updateProjectionMatrix()
  const fill=new THREE.DirectionalLight('#e9f0f5',.44)
  fill.position.set(4,3,-5)
  scene.add(sky,key,key.target,fill)

  const assets=createAssets()
  const surface=new THREE.MeshStandardMaterial({vertexColors:true,roughness:.76,metalness:.12})
  const screen=new THREE.MeshBasicMaterial({vertexColors:true,toneMapped:false})
  const shadow=new THREE.MeshBasicMaterial({map:contactTexture(),transparent:true,depthWrite:false,toneMapped:false})
  const floorMesh=new THREE.Mesh(assets.floor,surface)
  floorMesh.receiveShadow=true
  scene.add(floorMesh)
  const structures=new Map([...locations.values()].map(rack=>{
    const mesh=new THREE.Mesh(rack===cabinet ? assets.cabinet : assets.rack,surface)
    if (rack!==cabinet) mesh.position.set(rack.x,0,rack.z)
    mesh.castShadow=mesh.receiveShadow=true
    const contact=new THREE.Mesh(new THREE.PlaneGeometry(rack.width+.68,rack.depth+.42),shadow)
    contact.rotation.x=-Math.PI/2
    contact.position.set(rack.x+.13,.008,rack.z-.09)
    scene.add(mesh,contact)
    return [rack.id,{mesh,contact}]
  }))
  const trays=[1,-1].map(hand=>{
    const mesh=new THREE.Mesh(assets.tray,surface)
    mesh.castShadow=mesh.receiveShadow=true
    mesh.visible=false
    scene.add(mesh)
    return {mesh,hand}
  })
  const box=new THREE.BoxGeometry(.419,.295,.369)
  const outlineGeometry=new THREE.EdgesGeometry(box)
  box.dispose()
  const selection=new THREE.LineSegments(outlineGeometry,new THREE.LineBasicMaterial({color:colors.selected,toneMapped:false}))
  const placement=new THREE.LineSegments(outlineGeometry,new THREE.LineBasicMaterial({color:colors.placement,toneMapped:false}))
  selection.visible=placement.visible=false
  scene.add(selection,placement)

  const batches=[]
  function instances(geometry,material,casts=false) {
    const mesh=new THREE.InstancedMesh(geometry,material,assignments.size)
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage)
    mesh.frustumCulled=false
    mesh.castShadow=mesh.receiveShadow=casts
    batches.push(mesh)
    scene.add(mesh)
    return mesh
  }
  const devices=Object.fromEntries(Object.entries(assets.devices).map(([kind,geom])=>[kind,instances(geom,surface,true)]))
  const displays=Object.fromEntries(Object.entries(assets.displays).map(([kind,states])=>[kind,
    Object.fromEntries(Object.entries(states).map(([state,geom])=>[state,instances(geom,screen)]))]))
  const strip=new THREE.BoxGeometry(1,1,1)
  const indicators=Object.fromEntries(Object.entries(stateColors).map(([state,color])=>[state,
    instances(strip,new THREE.MeshBasicMaterial({color,toneMapped:false}))]))
  const transform=new THREE.Object3D()
  const pose={...overview}
  const wanted={...overview}
  const motion=matchMedia('(prefers-reduced-motion: reduce)')
  const raycaster=new THREE.Raycaster()
  const pointer=new THREE.Vector2()
  const scratch=new Vector3()
  const floorBox=new Box3(new Vector3(floor.minX,-.05,floor.minZ),new Vector3(floor.maxX,0,floor.maxZ))
  const structureBoxes=new Map()
  const blockers=new Map()
  for (const rack of locations.values()) {
    structureBoxes.set(rack.id,new Box3().setFromCenterAndSize(new Vector3(rack.x,rack.height/2,rack.z),
      new Vector3(rack.width,rack.height,rack.depth)))
    blockers.set(rack.id,rack===cabinet ? assets.fixedBlockers : assets.rackBlockers.map(item=>item.clone().translate(new Vector3(rack.x,0,rack.z))))
  }
  const slotBoxes=new Map([...positions.values()].map(slot=>[slot.key,new Box3()]))
  const visibleRack=id=>!layer || id===layer.location
  const split=slot=>layer?.location===slot.location && layer.level===slot.level
  let layer=null, openLayer=false, spread=0, savedLayerPose
  let person=null, walkX=0, walkZ=0, focusId=null, chosen=null, candidate=null
  let labels=[], lastLabels=''
  let frame=0, last=0, width=0, height=0, span=overview.height, rotating=false, visible=true, destroyed=false

  function showOutline(outline,key) {
    const slot=positions.get(key)
    outline.visible=Boolean(slot && visibleRack(slot.location))
    if (outline.visible) outline.position.set(slot.x,slot.y+.151,slot.z+(split(slot)?spread*slot.hand:0))
  }

  function sync() {
    for (const batch of batches) batch.count=0
    for (const [id,{mesh,contact}] of structures) mesh.visible=contact.visible=visibleRack(id)
    const selectedRack=locations.get(layer?.location)
    for (const [id,bounds] of structureBoxes) {
      const rack=locations.get(id)
      const depth=rack.depth/2+(id===layer?.location ? spread : 0)
      bounds.min.z=rack.z-depth
      bounds.max.z=rack.z+depth
    }
    for (const {hand,mesh} of trays) {
      mesh.visible=Boolean(selectedRack && spread>.01)
      if (mesh.visible) mesh.position.set(selectedRack.x,levels[layer.level-1],selectedRack.z+hand*(.205+spread))
    }
    for (const [slotKey,slot] of positions) {
      const dz=split(slot)?spread*slot.hand:0
      slotBoxes.get(slotKey).setFromCenterAndSize(new Vector3(slot.x,slot.y+.148,slot.z+dz),
        new Vector3(slot.spacing-.018,.288,slot.depth-.004))
      const device=assignments.get(slotKey)
      if (!device || !visibleRack(slot.location)) continue
      transform.scale.set(1,1,1)
      transform.rotation.y=slot.hand===1?0:Math.PI
      transform.position.set(slot.x,slot.y+.002,slot.z+dz)
      transform.updateMatrix()
      const body=devices[device.kind]
      body.setMatrixAt(body.count++,transform.matrix)
      const display=displays[device.kind][device.state]
      if (display) {
        display.setMatrixAt(display.count++,transform.matrix)
        const signal=indicators[device.state]
        transform.position.set(slot.x,slot.y-.041,slot.edge+dz+slot.hand*.015)
        transform.scale.set(slot.spacing-.13,device.state==='off' ? .025 : .043,.017)
        transform.updateMatrix()
        signal.setMatrixAt(signal.count++,transform.matrix)
      }
    }
    for (const batch of batches) batch.instanceMatrix.needsUpdate=true
    showOutline(selection,chosen)
    showOutline(placement,candidate)
    gl.shadowMap.needsUpdate=true
    invalidate()
  }

  function updateLabels() {
    const rack=locations.get(focusId)
    const hand=person && rack ? Math.sign(person.z-rack.z)||1 : Math.cos(pose.yaw)>=0?1:-1
    const keys=[...assignments.keys()].filter(key=>{
      const slot=positions.get(key)
      return visibleRack(slot.location) && (layer ? split(slot) :
        key===chosen || (rack && slot.location===rack.id && (rack===cabinet || slot.hand===hand)))
    })
    const signature=JSON.stringify([keys.map(key=>[key,assignments.get(key).id,key===chosen]),layer?.location,layer?.level])
    if (signature!==lastLabels) {
      lastLabels=signature
      for (const {sprite} of labels) disposeLabel(sprite)
      labels=keys.map(key=>{
        const sprite=labelSprite(assignments.get(key).id,key===chosen)
        scene.add(sprite)
        return {slot:positions.get(key),sprite}
      })
    }
    for (const {slot,sprite} of labels) {
      if (split(slot)) sprite.position.set(slot.x,slot.y+.346,slot.z+slot.hand*spread)
      else sprite.position.set(slot.x,slot.y-.055,slot.edge+slot.hand*.037)
    }
  }

  function canWalk(x,z) {
    const radius=.18
    if (x<floor.minX+radius || x>floor.maxX-radius || z<floor.minZ+radius || z>floor.maxZ-radius) return false
    return [...locations.values()].every(rack=>Math.hypot(
      Math.max(0,Math.abs(x-rack.x)-rack.width/2),
      Math.max(0,Math.abs(z-rack.z)-rack.depth/2))>=radius)
  }

  function draw(now) {
    frame=0
    if (!visible || destroyed || !stage.clientWidth || !stage.clientHeight) { last=0; return }
    const dt=last ? Math.min((now-last)/1000,.05) : 0
    if (width!==stage.clientWidth || height!==stage.clientHeight) {
      width=stage.clientWidth
      height=stage.clientHeight
      gl.setSize(width,height,false)
    }
    let animating=rotating && !person && !layer && !motion.matches
    if (animating) wanted.yaw+=dt*.22
    for (const name of Object.keys(pose)) {
      const change=wanted[name]-pose[name]
      if (Math.abs(change)>.001 && !motion.matches) {
        pose[name]+=change*.25
        animating=true
      } else pose[name]=wanted[name]
    }
    const desired=openLayer ? .52 : 0
    if (spread!==desired) {
      spread=motion.matches || Math.abs(desired-spread)<.009 ? desired : spread+(desired-spread)*.25
      if (!openLayer && spread===0) layer=null
      sync()
      animating ||= spread!==desired
    }
    const aspect=width/height
    span=Math.max(pose.height,pose.width/aspect)/pose.zoom
    camera.left=-span*aspect/2
    camera.right=span*aspect/2
    camera.top=span/2
    camera.bottom=-span/2
    camera.position.set(pose.x+Math.sin(pose.yaw)*Math.cos(pose.pitch)*16,
      pose.y+Math.sin(pose.pitch)*16,pose.z+Math.cos(pose.yaw)*Math.cos(pose.pitch)*16)
    camera.lookAt(pose.x,pose.y,pose.z)
    camera.updateProjectionMatrix()
    if (person) {
      if (walkX || walkZ) {
        const {yaw}=person
        const speed=dt*1.55/Math.hypot(walkX,walkZ)
        const dx=(Math.sin(yaw)*walkZ-Math.cos(yaw)*walkX)*speed
        const dz=(Math.cos(yaw)*walkZ+Math.sin(yaw)*walkX)*speed
        if (canWalk(person.x+dx,person.z)) person.x+=dx
        if (canWalk(person.x,person.z+dz)) person.z+=dz
        animating=true
      }
      const {x,z,yaw,pitch}=person
      const horizontal=Math.cos(pitch)
      eye.position.set(x,1.62,z)
      eye.lookAt(x+Math.sin(yaw)*horizontal,1.62+Math.sin(pitch),z+Math.cos(yaw)*horizontal)
      eye.aspect=aspect
      eye.updateProjectionMatrix()
    }
    const active=person?eye:camera
    updateLabels()
    gl.render(scene,active)
    for (const [id,marker] of markers) {
      const rack=locations.get(id)
      scratch.set(rack.x,rack.height+.11,rack.z).project(active)
      marker.hidden=Boolean(person || !visibleRack(id) || Math.abs(scratch.x)>.95 || Math.abs(scratch.y)>.91 || Math.abs(scratch.z)>1)
      marker.style.left=(scratch.x+1)*50+'%'
      marker.style.top=(1-scratch.y)*50+'%'
    }
    last=animating?now:0
    if (animating) invalidate()
  }

  function invalidate() {
    if (!frame && visible && !destroyed) frame=requestAnimationFrame(draw)
  }
  const observer=new ResizeObserver(invalidate)
  observer.observe(stage)

  function pick(x,y) {
    const bounds=canvas.getBoundingClientRect()
    if (x<bounds.left || x>bounds.right || y<bounds.top || y>bounds.bottom || !bounds.width || !bounds.height) return {}
    pointer.set(2*(x-bounds.left)/bounds.width-1,1-2*(y-bounds.top)/bounds.height)
    raycaster.setFromCamera(pointer,person?eye:camera)
    const ray=raycaster.ray
    const distance=box=>ray.intersectBox(box,scratch) ? ray.origin.distanceToSquared(scratch):Infinity
    let location=null, closest=Infinity
    for (const [id,box] of structureBoxes) {
      if (!visibleRack(id)) continue
      const slotHit=distance(box)
      if (slotHit<closest) { closest=slotHit; location=id }
    }
    let occluded=distance(floorBox)
    for (const [id,boxes] of blockers) {
      if (visibleRack(id)) for (const box of boxes) occluded=Math.min(occluded,distance(box))
    }
    let slot=null
    for (const [key,box] of slotBoxes) {
      if (positions.get(key).location!==location) continue
      const s=distance(box)
      if (Number.isFinite(s) && s<occluded+.001) { slot=key; occluded=s }
    }
    return {location,slot}
  }

  function aim(next) {
    const delta=next.yaw-pose.yaw
    Object.assign(wanted,next,{yaw:pose.yaw+Math.atan2(Math.sin(delta),Math.cos(delta))})
    invalidate()
  }

  function showLayer(slot) {
    if (slot && slot.location!==cabinet.id) {
      savedLayerPose={...wanted}
      layer=slot
      openLayer=true
      const rack=locations.get(slot.location)
      aim({x:rack.x,y:slot.y+.03,z:rack.z,yaw:slot.hand===1 ? .38 : Math.PI-.38,pitch:.79,width:3.08,height:2.46,zoom:1})
    } else {
      openLayer=false
      if (savedLayerPose) aim(savedLayerPose)
      savedLayerPose=null
      if (spread===0) layer=null
    }
    sync()
  }

  sync()
  return {
    pick, sync, showLayer,
    select(key) { chosen=key; showOutline(selection,key); invalidate() },
    target(key,swap) {
      candidate=key
      showOutline(placement,key)
      placement.material.color.set(swap?colors.swap:colors.placement)
      invalidate()
    },
    focus(id) {
      focusId=id
      const rack=locations.get(id)
      if (!rack) { aim(overview); return }
      const rear=rack!==cabinet && Math.cos(pose.yaw)<0
      aim({x:rack.x,y:.91,z:rack.z,yaw:rear?Math.PI-.16:.18,pitch:.18,width:3.04,height:2.54,zoom:1})
    },
    orbit(dx,dy) {
      if (person) {
        person.yaw-=dx*.005
        person.pitch=MathUtils.clamp(person.pitch-dy*.0045,-1.18,1.18)
      } else {
        wanted.yaw-=dx*.008
        wanted.pitch=MathUtils.clamp(wanted.pitch+dy*.006,.11,1.37)
      }
      invalidate()
    },
    pan(dx,dy) {
      const unit=span/Math.max(height,1)
      const {yaw}=wanted
      wanted.x-=(Math.cos(yaw)*dx+Math.sin(yaw)*dy)*unit
      wanted.z+=(Math.sin(yaw)*dx-Math.cos(yaw)*dy)*unit
      invalidate()
    },
    zoom(factor) {
      if (!person) wanted.zoom=MathUtils.clamp(wanted.zoom*factor,.55,4)
      invalidate()
    },
    walk(active) {
      const x=focusId===cabinet.id ? 3.04 : locations.get(focusId)?.x ?? -2.70
      person=active ? {x,z:0,yaw:focusId?.startsWith('B') ? Math.PI : 0,pitch:0} : null
      walkX=walkZ=0
      invalidate()
    },
    move(x,z) { walkX=x; walkZ=z; invalidate() },
    rotate(active) { rotating=active; invalidate() },
    visible(active) {
      visible=active
      if (!active && frame) { cancelAnimationFrame(frame); frame=0; last=0 }
      invalidate()
    },
    dispose() {
      destroyed=true
      if (frame) cancelAnimationFrame(frame)
      observer.disconnect()
      for (const {sprite} of labels) disposeLabel(sprite)
      const resources=new Set([shadow.map,key.shadow])
      scene.traverse(object=>{
        if (object.geometry) resources.add(object.geometry)
        if (object.material) resources.add(object.material)
        if (object.isInstancedMesh) object.dispose()
      })
      for (const asset of resources) asset.dispose()
      gl.dispose()
      gl.forceContextLoss()
    },
  }
}
