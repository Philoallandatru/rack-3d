import * as THREE from 'three'
import { cabinet, dimensions, floor, levels } from './rack-layout.js'

const modelPaint = {
  slab: '#716960',
  floor: '#bbb0a0',
  floorRim: '#9d9286',
  tileJoint: '#b4ac9f',
  boundary: '#9a816a',
  cornerMark: '#a77e54',
  aisleStripe: '#837c6e',
  bayLine: '#a99985',
  upright: '#404649',
  rackFoot: '#252d2d',
  uprightCap: '#777877',
  mountingHole: '#343938',
  sideBrace: '#4f5858',
  shelf: '#777c7b',
  beam: '#4b5353',
  beamLip: '#717974',
  beamPlate: '#444a49',
  shelfDivider: '#686c65',
  cabinetSide: '#76736b',
  cabinetBack: '#66635b',
  cabinetTop: '#afaa9d',
  cabinetBase: '#635e55',
  cabinetShelf: '#a29a8b',
  cabinetShelfEdge: '#897459',
  cabinetDivider: '#8b8577',
  cabinetTrim: '#a88b62',
  screenBezel: '#233b41',
  laptopDisplay: '#363d3d',
  laptopDisplayPane: '#424a47',
  laptopDisplayTop: '#5f7775',
  laptopDisplayBars: '#778d87',
  desktopDisplay: '#494442',
  desktopDisplayTop: '#c6a875',
  desktopDisplayBars: '#aa876c',
};

// Geometry and the industrial finish are extracted from the original equipment layout.
export function createAssets() {
  const { Vector3, Box3, Color, Euler } = THREE
  const cube = new THREE.BoxGeometry(1, 1, 1)
  const unit = cube.toNonIndexed()
  cube.dispose()
  const vertices = unit.getAttribute('position')
  const directions = unit.getAttribute('normal')
  const solid = (x, y, z, w, h, d, color, tilt = 0) => ({ x, y, z, w, h, d, color, tilt })
  const rackParts = []
  const room = []
  const rackBlockers = []
  const fixedBlockers = []

  function solids(parts) {
    const coords = new Float32Array(parts.length * vertices.count * 3)
    const normals = new Float32Array(coords.length)
    const colors = new Float32Array(coords.length)
    const tint = new Color()
    const point = new Vector3()
    const rotation = new Euler(0, 0, 0)
    let offset = 0
    for (const { x, y, z, w, h, d, color, tilt } of parts) {
      tint.set(modelPaint[color] ?? color)
      rotation.x = tilt
      for (let index = 0; index < vertices.count; index += 1) {
        point.fromBufferAttribute(vertices, index)
        point.set(point.x * w, point.y * h, point.z * d).applyEuler(rotation)
        coords.set([point.x + x, point.y + y, point.z + z], offset)
        point.fromBufferAttribute(directions, index).applyEuler(rotation).toArray(normals, offset)
        tint.toArray(colors, offset)
        offset += 3
      }
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(coords, 3))
    geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return geometry
  }

  function structure(parts, blockers, x, y, z, w, h, d, color) {
    parts.push(solid(x, y, z, w, h, d, color))
    blockers.push(new Box3().setFromCenterAndSize(new Vector3(x, y, z), new Vector3(w, h, d)))
  }

  function buildFloor() {
    const { x, z, minX, maxX, minZ, maxZ, width, depth } = floor;
    const parts = [
      solid(x, -.15, z, width, .22, depth, 'slab'),
      solid(x, -.025, z, width, .05, depth, 'floor'),
      solid(x, -.044, maxZ + .003, width, .018, .008, 'floorRim'),
      solid(maxX + .002, -.044, z, .008, .018, depth, 'floorRim'),
    ];
    const gridStep = .5 * Math.max(1, Math.ceil(Math.max(width, depth) / 48));
    for (let u = minX + .24; u < maxX - .14; u += gridStep) parts.push(solid(u, .001, z, .006, .003, depth - .18, 'tileJoint'));
    for (let v = minZ + .10; v <= maxZ - .099; v += gridStep) parts.push(solid(x, .001, v, width - .24, .003, .006, 'tileJoint'));
    for (const v of [minZ + .19, maxZ - .19]) {
      parts.push(solid(x, .003, v, width - .36, .004, .017, 'boundary'));
      for (const u of [minX + .41, maxX - .41]) {
        parts.push(solid(u, .005, v, .44, .005, .027, 'cornerMark'));
        parts.push(solid(u + (u < x ? -.214 : .214), .005, v + (v < z ? .20 : -.20), .027, .005, .40, 'cornerMark'));
      }
    }
    const stripeStep = .43 * Math.max(1, Math.ceil(width / 48));
    for (let u = minX + .84; u <= maxX - 2.54; u += stripeStep) parts.push(solid(u, .006, 0, .205, .005, .019, 'aisleStripe'));
    for (const u of [-3.82, 3.40, 5.61]) parts.push(solid(u, .005, z, .012, .004, depth - 1.22, 'bayLine'));
    return solids(parts);
  }

  function buildRack() {
    const { width, depth, height } = dimensions;
    for (const x of [-width / 2 + .024, width / 2 - .024]) {
      for (const z of [-depth / 2 + .024, depth / 2 - .024]) {
        structure(rackParts, rackBlockers, x, height / 2, z, .048, height, .048, 'upright');
        rackParts.push(solid(x, .022, z, .062, .044, .058, 'rackFoot'));
        rackParts.push(solid(x, height - .014, z, .049, .027, .049, 'uprightCap'));
        const outside = Math.sign(z);
        for (let y = .09; y < height - .05; y += .071) {
          rackParts.push(solid(x, y, z + outside * .0245, .011, .018, .002, 'mountingHole'));
        }
      }
      for (const y of [.087, 1.746]) rackParts.push(solid(x, y, 0, .036, .032, .72, 'sideBrace'));
    }
    for (const y of levels) {
      structure(rackParts, rackBlockers, 0, y - .021, 0, 1.955, .042, .758, 'shelf');
      for (const hand of [1, -1]) {
        rackParts.push(solid(0, y - .039, hand * .383, 1.938, .063, .034, 'beam'));
        rackParts.push(solid(0, y - .015, hand * .400, 1.915, .011, .004, 'beamLip'));
        for (let col = 1; col <= 4; col += 1) {
          const x = (col - 2.5) * .47;
          rackParts.push(solid(x, y - .043, hand * .402, .134, .025, .005, 'beamPlate'));
        }
      }
      rackParts.push(solid(0, y + .002, 0, 1.87, .004, .013, 'shelfDivider'));
    }
  }

  function buildCabinet() {
    const { x, z, width, depth, height } = cabinet;
    for (const hand of [1, -1]) structure(room, fixedBlockers, x + hand * (width / 2 - .028), height / 2, z, .056, height, depth, 'cabinetSide');
    structure(room, fixedBlockers, x, height / 2, z - depth / 2 + .022, width - .10, height, .044, 'cabinetBack');
    structure(room, fixedBlockers, x, height - .029, z, width, .058, depth, 'cabinetTop');
    structure(room, fixedBlockers, x, .051, z, width, .102, depth, 'cabinetBase');
    for (const y of levels) {
      structure(room, fixedBlockers, x, y - .025, z, width - .08, .05, depth - .025, 'cabinetShelf');
      room.push(solid(x, y - .025, z + depth / 2, width - .08, .045, .012, 'cabinetShelfEdge'));
    }
    for (const boundary of [-1, 0, 1]) {
      structure(room, fixedBlockers, x + boundary * .445, .975, z, .027, 1.52, depth - .067, 'cabinetDivider');
    }
    room.push(solid(x, height - .062, z + depth / 2, width - .03, .025, .012, 'cabinetTrim'));
  }

  const displayGeometry = {
    laptop: { x: 0, y: .028, z: -.11, width: .339, height: .221, angle: -.16 },
    desktop: { x: -.065, y: .085, z: -.083, width: .244, height: .164, angle: -.07 },
  };

  function displayPanel(parts, kind, px, py, pz, w, h, d, color) {
    const { x, y, z, angle } = displayGeometry[kind];
    const rotatedY = py * Math.cos(angle) - pz * Math.sin(angle);
    const rotatedZ = py * Math.sin(angle) + pz * Math.cos(angle);
    parts.push(solid(x + px, y + rotatedY, z + rotatedZ, w, h, d, color, angle));
  }

  function screen(parts, kind) {
    const { width, height } = displayGeometry[kind];
    const desktop = kind === 'desktop';
    const panel = (...args) => displayPanel(parts, kind, ...args);
    panel(0, height / 2, 0, width, height, .015, 'screenBezel');
    panel(0, height / 2, -.008, width * .95, height * .92, .004, desktop ? '#76867e' : '#647c80');
    panel(0, height * .53, .009, width * .92, height * .84, .003, desktop ? 'desktopDisplay' : 'laptopDisplay');
    panel(0, height * .89, .011, width * .92, height * .12, .002, desktop ? 'desktopDisplayTop' : 'laptopDisplayTop');
    panel(-width * .247, height * .49, .011, width * .38, height * .60, .002, desktop ? '#83795a' : 'laptopDisplayPane');
    panel(width * .205, height * .72, .011, width * .42, height * .065, .002, desktop ? '#ddbb7c' : '#8ebbb1');
    for (let bar = 0; bar < 4; bar += 1) {
      const length = [0.14, 0.22, 0.18, 0.27][bar];
      panel(width * (.12 + bar * .068), height * (.20 + length / 2), .012,
        width * .036, height * length, .003, desktop ? 'desktopDisplayBars' : 'laptopDisplayBars');
    }
    panel(-width * .258, height * .66, .012, width * .22, height * .04, .003, '#b3ccc0');
    panel(-width * .285, height * .56, .012, width * .16, height * .03, .003, '#8eafa4');
    panel(-width * .254, height * .49, .012, width * .23, height * .03, .003, '#8eafa4');
  }

  function notebookParts() {
    const parts = [
      solid(0, .011, .009, .342, .020, .253, '#789091'),
      solid(0, .009, .135, .308, .009, .004, '#b4bfb2'),
      solid(0, .022, -.017, .303, .004, .130, '#3d5359'),
      solid(0, .024, .091, .106, .004, .057, '#a0ada5'),
      solid(-.12, .027, -.111, .055, .019, .022, '#455f63'),
      solid(.12, .027, -.111, .055, .019, .022, '#455f63'),
    ];
    for (let row = 0; row < 4; row += 1) {
      for (let col = 0; col < 10; col += 1) {
        parts.push(solid((col - 4.5) * .028, .026, -.062 + row * .027, .023, .004, .018, '#6e8384'));
      }
    }
    screen(parts, 'laptop');
    return parts;
  }

  function desktopParts() {
    const parts = [
      solid(-.063, .010, -.065, .137, .021, .100, '#5d7174'),
      solid(-.063, .067, -.081, .031, .111, .025, '#6e8484'),
      solid(-.047, .012, .094, .237, .023, .079, '#40575b'),
      solid(-.047, .025, .091, .216, .006, .052, '#70877f'),
      solid(.133, .013, .100, .031, .026, .049, '#647f83'),
      solid(.153, .118, -.049, .094, .232, .145, '#586b67'),
      solid(.153, .118, .025, .084, .217, .009, '#374b4b'),
      solid(.153, .203, .031, .054, .030, .007, '#668481'),
      solid(.153, .187, .034, .010, .008, .008, '#f0c478'),
    ];
    for (let slot = 0; slot < 4; slot += 1) {
      parts.push(solid(.153, .051 + slot * .017, .031, .055, .005, .005, '#768d85'));
    }
    screen(parts, 'desktop');
    return parts;
  }

  function statusDisplay(kind, state) {
    const { width, height } = displayGeometry[kind];
    const parts = [];
    const panel = (...args) => displayPanel(parts, kind, ...args);
    if (state === 'off') {
      panel(0, height * .53, .017, width * .93, height * .86, .003, '#242b2e');
    } else {
      const color = state === 'failed'
        ? { glass: '#ab353b', light: '#ffc1af', text: '#ffe9dc', edge: '#ff765e' }
        : { glass: '#087c63', light: '#70f1c4', text: '#b5f5da', edge: '#48e9ad' };
      panel(0, height * .53, .017, width * .93, height * .86, .003, color.glass);
      panel(0, height * .82, .020, width * .76, height * .075, .003, color.light);
      panel(-width * .16, height * .50, .021, width * .35, height * .14, .003, color.text);
      panel(-width * .22, height * .29, .021, width * .23, height * .047, .003, color.light);
      panel(width * .25, height * .43, .021, width * .09, height * .31, .003, color.light);
      panel(0, height + .005, 0, width * .73, .012, .026, color.edge);
    }
    return solids(parts);
  }

  buildRack()
  buildCabinet()
  const highlightedStates = ['testing', 'off', 'failed']
  const asset = {
    floor: buildFloor(), cabinet: solids(room), rack: solids(rackParts), rackBlockers, fixedBlockers,
    tray: solids([solid(0, -.016, 0, 1.96, .032, .353, 'shelf')]),
    devices: { laptop: solids(notebookParts()), desktop: solids(desktopParts()) },
    displays: Object.fromEntries(['laptop', 'desktop'].map(kind => [kind,
      Object.fromEntries(highlightedStates.map(state => [state, statusDisplay(kind, state)])),
    ])),
  }
  unit.dispose()
  return asset
}
