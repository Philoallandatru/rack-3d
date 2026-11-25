import css from './rack-scene.css?inline'
import { createRackRenderer } from './rack-renderer.js'
import { cabinet, createLayout, describeSlot } from './rack-layout.js'

const mounts=new WeakMap()
const directions={
  w:'forward',arrowup:'forward',s:'back',arrowdown:'back',
  a:'left',arrowleft:'left',d:'right',arrowright:'right',
}

const interfaceMarkup=`
  <div class="stage">
    <canvas tabindex="0" aria-label="交互式机柜三维模型"></canvas>
    <div class="markers"></div>
    <div class="view" role="group" aria-label="视角与动画">
      <button type="button" data-action="reset">全景</button>
      <button type="button" data-action="zoom-in" aria-label="放大">＋</button>
      <button type="button" data-action="zoom-out" aria-label="缩小">−</button>
      <button type="button" data-action="play" aria-pressed="false">巡视</button>
      <button type="button" data-action="layer" aria-pressed="false">展开层板</button>
      <button type="button" data-action="walk" aria-pressed="false">人物视角</button>
    </div>
    <div class="walk" role="group" aria-label="漫游方向" hidden>
      <button type="button" data-step="forward" aria-label="向前">↑</button>
      <button type="button" data-step="left" aria-label="向左">←</button>
      <button type="button" data-step="back" aria-label="向后">↓</button>
      <button type="button" data-step="right" aria-label="向右">→</button>
    </div>
    <div class="status" role="status">拖动空地旋转，拖动设备换位</div>
    <p class="fallback" role="alert" hidden>当前浏览器无法显示机柜 3D。请使用支持 WebGL 2 的浏览器。</p>
  </div>`

export function mountRackScene(host, {autoplay=false} = {}) {
  if (mounts.has(host)) throw new Error('A rack scene is already mounted on this element.')
  const root=host.shadowRoot ?? host.attachShadow({mode:'open'})
  const style=document.createElement('style')
  style.textContent=css
  const wrapper=document.createElement('div')
  wrapper.className='rack'
  wrapper.innerHTML=interfaceMarkup
  root.append(style,wrapper)
  const stage=wrapper.querySelector('.stage')
  const canvas=wrapper.querySelector('canvas')
  const status=wrapper.querySelector('.status')
  const walkControls=wrapper.querySelector('.walk')
  const buttons=new Map([...wrapper.querySelectorAll('[data-action]')].map(node=>[node.dataset.action,node]))
  const {locations,positions,assignments,move}=createLayout()
  const markers=new Map([...locations.keys()].map(id=>{
    const marker=document.createElement('button')
    marker.type='button'
    marker.dataset.rack=id
    marker.textContent=id===cabinet.id?'储藏柜':id
    marker.setAttribute('aria-label','查看 '+marker.textContent)
    wrapper.querySelector('.markers').append(marker)
    return [id,marker]
  }))
  const abort=new AbortController()
  const listen=(node,type,fn,options)=>node.addEventListener(type,fn,{...options,signal:abort.signal})
  const motion=matchMedia('(prefers-reduced-motion: reduce)')
  let scene, intersection, selected=null, focusedRack=null, walking=false, opened=false, playing=false, onscreen=true
  let gesture=null, pinch=0, stopped=false
  const pointers=new Map()
  const held=new Map()

  function describe(text) {
    if (text!==status.textContent) status.textContent=text
  }

  function setAutoplay(active) {
    if (stopped) return
    playing=Boolean(scene && active && !walking && !opened && !motion.matches)
    buttons.get('play').setAttribute('aria-pressed',String(playing))
    buttons.get('play').textContent=playing?'暂停巡视':'巡视'
    scene?.rotate(playing)
  }

  function updateMovement() {
    const keys=new Set(held.values())
    scene.move(Number(keys.has('right'))-Number(keys.has('left')),Number(keys.has('forward'))-Number(keys.has('back')))
  }

  function setWalk(active) {
    if (active && opened) setLayer(false)
    setAutoplay(false)
    held.clear()
    walking=active
    scene.walk(active)
    walkControls.hidden=!active
    buttons.get('walk').setAttribute('aria-pressed',String(active))
    buttons.get('walk').textContent=active?'退出漫游':'人物视角'
    buttons.get('layer').disabled=active
    buttons.get('zoom-in').disabled=active
    buttons.get('zoom-out').disabled=active
    buttons.get('play').disabled=active || motion.matches
    canvas.dataset.mode=active?'walk':'overview'
    describe(active?'拖动画面转身，方向键或 WASD 调整位置':'拖动空地旋转，拖动设备换位')
    if (active) canvas.focus({preventScroll:true})
  }

  function setLayer(active) {
    setAutoplay(false)
    if (active && walking) setWalk(false)
    const chosen=positions.get(selected)
    const fallback=focusedRack && focusedRack!==cabinet.id ? focusedRack : 'A-01'
    const slot=chosen && chosen.location!==cabinet.id ? chosen : positions.get(fallback+'/front/4/1')
    opened=active
    scene.showLayer(active?slot:null)
    buttons.get('layer').setAttribute('aria-pressed',String(active))
    buttons.get('layer').textContent=active?'收拢层板':'展开层板'
    buttons.get('play').disabled=active || motion.matches
    describe(active?'已展开 '+slot.location+' 第 '+slot.level+' 层':'拖动空地旋转，拖动设备换位')
  }

  function resetView() {
    if (!scene || stopped) return
    setAutoplay(false)
    if (walking) setWalk(false)
    if (opened) setLayer(false)
    selected=null
    focusedRack=null
    scene.select(null)
    scene.focus(null)
    describe('拖动空地旋转，拖动设备换位')
  }

  function choose(slot) {
    selected=slot
    scene.select(slot)
    describe((assignments.get(slot)?.id ?? '空工位')+' · '+describeSlot(positions.get(slot)))
  }

  function focus(id) {
    if (opened) setLayer(false)
    setAutoplay(false)
    if (positions.get(selected)?.location!==id) {
      selected=null
      scene.select(null)
    }
    focusedRack=id
    scene.focus(id)
    describe(id===cabinet.id?'储藏柜 · 可将设备拖入柜内':'已对准 '+id+' 货架')
  }

  function dropKey(x,y,source) {
    const picked=scene.pick(x,y)
    if (picked.slot) return picked.slot
    if (picked.location===cabinet.id && positions.get(source).location!==cabinet.id) {
      return [...positions.values()].find(slot=>slot.location===cabinet.id && !assignments.has(slot.key))?.key
    }
  }

  function separation() {
    const [a,b]=pointers.values()
    return Math.hypot(a.x-b.x,a.y-b.y)
  }

  function pointerDown(event) {
    if (event.button>2 || (pointers.size && event.pointerType!=='touch')) return
    event.preventDefault()
    canvas.focus({preventScroll:true})
    setAutoplay(false)
    canvas.setPointerCapture(event.pointerId)
    pointers.set(event.pointerId,{x:event.clientX,y:event.clientY})
    if (pointers.size>1) {
      gesture=null
      scene.target(null,false)
      pinch=separation()
      return
    }
    const pan=!walking && (event.shiftKey || event.button!==0)
    const hit=scene.pick(event.clientX,event.clientY)
    gesture={id:event.pointerId, hit, pan, x:event.clientX, y:event.clientY, moved:false,
      source:!walking && !pan && assignments.has(hit.slot) ? hit.slot : null}
  }

  function pointerMove(event) {
    const prev=pointers.get(event.pointerId)
    const x=event.clientX, y=event.clientY
    if (!prev) {
      if (event.pointerType==='mouse') canvas.dataset.cursor=assignments.has(scene.pick(x,y).slot)?'device':''
      return
    }
    pointers.set(event.pointerId,{x,y})
    if (pointers.size>1) {
      const distance=separation()
      if (pinch>0 && distance>0) scene.zoom(distance/pinch)
      pinch=distance
      return
    }
    if (!gesture || gesture.id!==event.pointerId) return
    if (!gesture.moved && Math.hypot(x-gesture.x,y-gesture.y)<5) return
    gesture.moved=true
    if (gesture.source) {
      const key=dropKey(x,y,gesture.source)
      const target=key && key!==gesture.source ? key : null
      const existing=assignments.get(target)
      scene.target(target,Boolean(existing))
      describe(existing?'松手与 '+existing.id+' 交换':target?'松手移至 '+describeSlot(positions.get(target)):'拖向工位或储藏柜')
      canvas.dataset.cursor='dragging'
    } else if (gesture.pan) scene.pan(x-prev.x,y-prev.y)
    else scene.orbit(x-prev.x,y-prev.y)
  }

  function pointerEnd(event,commit) {
    if (!pointers.delete(event.pointerId)) return
    const finished=gesture
    if (pointers.size<2) pinch=0
    if (finished?.id===event.pointerId) gesture=null
    canvas.dataset.cursor=''
    if (!finished || finished.id!==event.pointerId) return
    scene.target(null,false)
    if (!commit) {
      if (finished.source) choose(finished.source)
      return
    }
    if (finished.source && finished.moved) {
      const key=dropKey(event.clientX,event.clientY,finished.source)
      const change=move(finished.source,key)
      if (!change) { choose(finished.source); return }
      scene.sync()
      choose(key)
      host.dispatchEvent(new CustomEvent('rackmove',{detail:change,bubbles:true,composed:true}))
    } else if (!finished.moved && !finished.pan && !walking) {
      if (finished.hit.slot) choose(finished.hit.slot)
      else if (finished.hit.location) focus(finished.hit.location)
    }
  }

  try {
    scene=createRackRenderer(canvas,stage,{locations,positions,assignments},markers)
    wrapper.dataset.ready='true'
  } catch (error) {
    for (const button of [...buttons.values(),...markers.values()]) button.disabled=true
    wrapper.querySelector('.fallback').hidden=false
    status.hidden=true
    canvas.hidden=true
    console.warn('Rack 3D could not initialize WebGL.',error)
  }

  if (scene) {
    const actions={
      reset:resetView,
      'zoom-in':()=>{setAutoplay(false);scene.zoom(1.24)},
      'zoom-out':()=>{setAutoplay(false);scene.zoom(1/1.24)},
      play:()=>setAutoplay(!playing),
      layer:()=>setLayer(!opened),
      walk:()=>setWalk(!walking),
    }
    for (const [id,button] of buttons) listen(button,'click',actions[id])
    for (const [id,marker] of markers) listen(marker,'click',()=>focus(id))
    listen(canvas,'contextmenu',event=>event.preventDefault())
    listen(canvas,'pointerdown',pointerDown)
    listen(canvas,'pointermove',pointerMove)
    listen(canvas,'pointerup',event=>pointerEnd(event,true))
    listen(canvas,'pointercancel',event=>pointerEnd(event,false))
    listen(canvas,'lostpointercapture',event=>pointerEnd(event,false))
    listen(canvas,'wheel',event=>{
      if (walking || pointers.size || root.activeElement!==canvas) return
      event.preventDefault()
      setAutoplay(false)
      const delta=event.deltaMode===1 ? event.deltaY*16 : event.deltaY
      scene.zoom(Math.exp(-delta*.0015))
    },{passive:false})
    listen(wrapper,'keydown',event=>{
      const key=event.key.toLowerCase()
      if (key==='escape') { event.preventDefault(); resetView(); return }
      if (!directions[key]) return
      if (walking) {
        event.preventDefault()
        held.set(key,directions[key])
        updateMovement()
      } else if (event.target===canvas && key.startsWith('arrow')) {
        event.preventDefault()
        setAutoplay(false)
        scene.orbit(key==='arrowleft'?-18:key==='arrowright'?18:0,key==='arrowup'?-12:key==='arrowdown'?12:0)
      }
    })
    listen(window,'keyup',event=>{if (held.delete(event.key.toLowerCase())) updateMovement()})
    listen(window,'blur',()=>{
      for (const pointerId of pointers.keys()) pointerEnd({pointerId},false)
      held.clear()
      updateMovement()
    })
    for (const button of walkControls.children) {
      listen(button,'pointerdown',event=>{
        event.preventDefault()
        button.setPointerCapture(event.pointerId)
        held.set(event.pointerId,button.dataset.step)
        updateMovement()
      })
      for (const type of ['pointerup','pointercancel','lostpointercapture']) {
        listen(button,type,event=>{if (held.delete(event.pointerId)) updateMovement()})
      }
    }
    const updateVisibility=()=>scene.visible(onscreen && !document.hidden)
    intersection=new IntersectionObserver(([entry])=>{onscreen=entry.isIntersecting;updateVisibility()})
    intersection.observe(stage)
    listen(document,'visibilitychange',updateVisibility)
    function updateMotion() {
      buttons.get('play').disabled=walking || opened || motion.matches
      if (motion.matches) setAutoplay(false)
    }
    listen(motion,'change',updateMotion)
    updateMotion()
    setAutoplay(autoplay)
  }

  const controls={resetView,setAutoplay,destroy(){
    if (stopped) return
    stopped=true
    abort.abort()
    intersection?.disconnect()
    scene?.dispose()
    wrapper.remove()
    style.remove()
    mounts.delete(host)
  }}
  mounts.set(host,controls)
  return controls
}
