export const dimensions = { width: 2, depth: .8, height: 1.8 }
export const levels = [.20, .63, 1.06, 1.49]
export const cabinet = { id: 'C', x: 4.51, z: -.44, width: 1.88, depth: .67, height: 1.8 }
export const floor = {
  minX: -4.39, maxX: 6.09, minZ: -2.85, maxZ: 2.85,
  x: .85, z: 0, width: 10.48, depth: 5.7,
}

const racks = ['A', 'B'].flatMap((row, index) => [-2.70, -.24, 2.22].map((x, column) => ({
  id: row+'-0'+(column+1), x, z: index===0 ? 1.22 : -1.22, ...dimensions,
})))
const testing = new Set([3, 6, 35, 65, 70, 98, 130, 163])
const off = new Set([4, 38, 75, 108, 146, 177])

export function describeSlot(slot) {
  const location = slot.location===cabinet.id ? '储藏柜' : slot.location+' '+(slot.hand===1 ? '前侧' : '背侧')
  return location+' · '+slot.level+' 层 '+slot.column+' 号'
}

export function createLayout() {
  const locations = new Map([...racks, cabinet].map(rack => [rack.id,rack]))
  const positions = new Map()
  const assignments = new Map()
  let count = 0
  for (const rack of locations.values()) {
    const storage = rack===cabinet
    for (const hand of storage ? [1] : [1,-1]) {
      for (let level=levels.length; level>=1; level-=1) {
        for (let column=1; column<=4; column+=1) {
          const side = hand===1 ? 'front' : 'back'
          const key = [rack.id,side,level,column].join('/')
          const spacing = storage ? .445 : .47
          positions.set(key, {
            key, location:rack.id, hand, level, column, spacing,
            x:rack.x+hand*(column-2.5)*spacing, y:levels[level-1], z:rack.z+(storage ? .025 : hand*.205),
            edge:rack.z+hand*rack.depth/2, depth:storage ? .55 : .39,
          })
          if (!storage) {
            count+=1
            const kind = (count+Math.floor(count/8))%7<2 ? 'desktop' : 'laptop'
            const id = (kind==='desktop' ? 'DT-' : 'LT-')+String(count).padStart(3,'0')
            const state = testing.has(count) ? 'testing' : off.has(count) ? 'off' : 'ready'
            assignments.set(key,{id,kind,state})
          }
        }
      }
    }
  }

  function move(from,to) {
    if (from===to || !positions.has(to) || !assignments.has(from)) return null
    const device=assignments.get(from)
    const swapped=assignments.get(to)
    if (swapped) assignments.set(from,swapped)
    else assignments.delete(from)
    assignments.set(to,device)
    return { device:device.id, from, to, swapped:swapped?.id ?? null }
  }

  return {locations,positions,assignments,move}
}
