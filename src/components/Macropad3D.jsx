import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { MACROPAD_KEYS } from '../data/macropadKeys';
import { soundManager } from '../utils/sound';
import {
  SiReact,
  SiTailwindcss,
  SiCisco,
  SiJavascript,
  SiPython,
  SiFirebase,
  SiLinux,
  SiTypescript,
  SiCplusplus,
  SiLaravel,
  SiDocker,
  SiHtml5,
  SiOpencv,
  SiPhp,
  SiGit,
  SiKotlin,
  SiNodedotjs,
  SiVite,
} from 'react-icons/si';
import { TbBrandReactNative, TbBrandCss3 } from 'react-icons/tb';

const ICON_MAP = {
  react: SiReact,
  native: TbBrandReactNative,
  tailwind: SiTailwindcss,
  cisco: SiCisco,
  js: SiJavascript,
  python: SiPython,
  firebase: SiFirebase,
  linux: SiLinux,
  ts: SiTypescript,
  typescript: SiTypescript,
  cpp: SiCplusplus,
  laravel: SiLaravel,
  docker: SiDocker,
  html5: SiHtml5,
  opencv: SiOpencv,
  php: SiPhp,
  git: SiGit,
  css3: TbBrandCss3,
  kotlin: SiKotlin,
  node: SiNodedotjs,
  vite: SiVite,
};

function getIconData(keyId) {
  const comp = ICON_MAP[keyId];
  if (!comp) return null;
  const el = comp({});
  const isStroke = el.props?.attr?.fill === 'none' || el.props?.attr?.stroke === 'currentColor';
  const paths = [];
  const walk = (c) => {
    if (!c) return;
    if (Array.isArray(c)) c.forEach(walk);
    else {
      if (c.props?.d) paths.push(c.props.d);
      if (c.props?.children) walk(c.props.children);
    }
  };
  walk(el.props?.children);
  return { paths, isStroke };
}

/**
 * Creates high-DPI 512x512 canvas texture for keycap top surface.
 * Draws authentic official brand vector icons (SVG) on a sleek dark squircle background.
 */
function createKeycapTexture(key) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // 1. Solid base fill with authentic tech brand color matching the keycap plastic
  ctx.fillStyle = key.color;
  ctx.fillRect(0, 0, 512, 512);

  // 2. Realistic lighting gradient across the flat top mechanical plastic surface
  const grad = ctx.createLinearGradient(0, 0, 0, 512);
  grad.addColorStop(0, 'rgba(255, 255, 255, 0.20)');
  grad.addColorStop(0.35, 'rgba(255, 255, 255, 0.05)');
  grad.addColorStop(0.7, 'rgba(0, 0, 0, 0.04)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0.22)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);

  // Subtle keycap top inset bevel border (gives crisp mechanical cap definition)
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
  ctx.lineWidth = 6;
  ctx.strokeRect(16, 16, 480, 480);
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.18)';
  ctx.lineWidth = 4;
  ctx.strokeRect(20, 20, 472, 472);

  // 3. Draw Official SVG Vector Icon from react-icons in key.textColor
  const iconData = getIconData(key.id);
  if (iconData && iconData.paths.length > 0) {
    ctx.save();
    // Center icon at (256, 192) with size 215px
    const iconSize = 215;
    const cx = 256;
    const cy = 192;
    const scale = iconSize / 24; // react-icons uses standard 24x24 viewBox

    ctx.translate(cx, cy);
    ctx.scale(scale, scale);
    ctx.translate(-12, -12); // center the 24x24 icon

    if (iconData.isStroke) {
      ctx.strokeStyle = key.textColor;
      ctx.lineWidth = 2.0;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      iconData.paths.forEach((d) => {
        ctx.stroke(new Path2D(d));
      });
    } else {
      ctx.fillStyle = key.textColor;
      iconData.paths.forEach((d) => {
        ctx.fill(new Path2D(d), 'evenodd');
      });
    }
    ctx.restore();
  }

  // 4. Key Label Typography (Bold mechanical keycap legend)
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = key.textColor;
  ctx.font = '900 56px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText(key.label.toUpperCase(), 256, 388);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Creates 100% Watertight, Flat-Top Keycaps with Rounded Bevel Rim
 * Keycap improvements:
 * 1. Snug/tight dimensions (base width 0.96 with small 0.05 gap between bases)
 * 2. Flat planar top face (eliminates concave bowl/dish)
 * 3. Smooth rounded 90° shoulder bevel connecting walls to flat top
 * 4. Multi-material mesh (Top Face = Material 0 with logo, Walls/Bevel = Material 1)
 */
function createRealSculptedKeycapGeometry() {
  const geom = new THREE.BufferGeometry();
  const rimSteps = 48;
  const vertices = [];
  const uvs = [];
  const indices = [];

  function getRoundedRectPoint(t, w, d, r) {
    const p = t * 4;
    const corner = Math.floor(p);
    const ct = p - corner;
    const hw = w / 2 - r;
    const hd = d / 2 - r;

    let cx = 0, cz = 0, angle = 0;
    if (corner === 0) {
      cx = hw; cz = -hd;
      angle = -Math.PI / 2 + ct * (Math.PI / 2);
    } else if (corner === 1) {
      cx = hw; cz = hd;
      angle = 0 + ct * (Math.PI / 2);
    } else if (corner === 2) {
      cx = -hw; cz = hd;
      angle = Math.PI / 2 + ct * (Math.PI / 2);
    } else {
      cx = -hw; cz = -hd;
      angle = Math.PI + ct * (Math.PI / 2);
    }
    return {
      x: cx + Math.cos(angle) * r,
      z: cz + Math.sin(angle) * r
    };
  }

  // Authentic Mechanical Keycap: Touching at Base ("menempel") with 16° Trapezoidal Taper
  const baseW = 0.956, baseD = 0.956;
  const shoulderW = 0.76, shoulderD = 0.76;
  const topW = 0.70, topD = 0.70;
  const hShoulder = 0.34;
  const hTotal = 0.40;

  const wallRings = 5;
  const bevelRings = 4;
  const dishRings = 4;

  // 1. Tapered Slanted Walls (from Base y=0 to Shoulder y=hShoulder, 16° slant)
  for (let ring = 0; ring <= wallRings; ring++) {
    const frac = ring / wallRings;
    const curW = baseW + (shoulderW - baseW) * frac;
    const curD = baseD + (shoulderD - baseD) * frac;
    const curY = hShoulder * frac;
    const curR = 0.08 + (0.06 - 0.08) * frac;

    for (let s = 0; s < rimSteps; s++) {
      const t = s / rimSteps;
      const pt = getRoundedRectPoint(t, curW, curD, curR);
      vertices.push(pt.x, curY, pt.z);
      uvs.push(t, curY / hTotal);
    }
  }

  // 2. Rounded Shoulder Bevel (from Shoulder y=hShoulder to Top Rim y=hTotal)
  for (let ring = 1; ring <= bevelRings; ring++) {
    const bFrac = ring / bevelRings;
    const phi = bFrac * (Math.PI / 2);
    const curW = shoulderW + (topW - shoulderW) * Math.sin(phi);
    const curD = shoulderD + (topD - shoulderD) * Math.sin(phi);
    const curY = hShoulder + (hTotal - hShoulder) * Math.sin(phi);
    const curR = 0.06 + (0.05 - 0.06) * bFrac;

    for (let s = 0; s < rimSteps; s++) {
      const t = s / rimSteps;
      const pt = getRoundedRectPoint(t, curW, curD, curR);
      vertices.push(pt.x, curY, pt.z);
      uvs.push(t, curY / hTotal);
    }
  }

  // Wall quad indices (normals pointing outwards)
  const totalWallBevelRings = wallRings + bevelRings;
  for (let ring = 0; ring < totalWallBevelRings; ring++) {
    const r1 = ring * rimSteps;
    const r2 = (ring + 1) * rimSteps;
    for (let s = 0; s < rimSteps; s++) {
      const nextS = (s + 1) % rimSteps;
      indices.push(r1 + s, r2 + s, r1 + nextS);
      indices.push(r1 + nextS, r2 + s, r2 + nextS);
    }
  }
  const wallIndicesCount = indices.length;

  // 3. Flat Top Planar Surface (Planar face at y=hTotal, no concave dish!)
  const dishStartIndex = vertices.length / 3;
  const topIndicesStart = indices.length;
  const rimRingIndex = totalWallBevelRings * rimSteps;

  for (let ring = 1; ring <= dishRings; ring++) {
    const frac = ring / (dishRings + 1);
    const scale = 1 - frac;
    const curW = topW * scale;
    const curD = topD * scale;
    const curR = 0.05 * scale;
    const curY = hTotal; // Flat top plane

    for (let s = 0; s < rimSteps; s++) {
      const t = s / rimSteps;
      const pt = getRoundedRectPoint(t, curW, curD, curR);
      vertices.push(pt.x, curY, pt.z);
      uvs.push((pt.x / topW) + 0.5, 1 - ((pt.z / topD) + 0.5));
    }
  }

  const firstDishRingIdx = dishStartIndex;
  for (let s = 0; s < rimSteps; s++) {
    const nextS = (s + 1) % rimSteps;
    indices.push(rimRingIndex + s, firstDishRingIdx + s, rimRingIndex + nextS);
    indices.push(rimRingIndex + nextS, firstDishRingIdx + s, firstDishRingIdx + nextS);
  }

  for (let ring = 0; ring < dishRings - 1; ring++) {
    const r1 = dishStartIndex + ring * rimSteps;
    const r2 = dishStartIndex + (ring + 1) * rimSteps;
    for (let s = 0; s < rimSteps; s++) {
      const nextS = (s + 1) % rimSteps;
      indices.push(r1 + s, r2 + s, r1 + nextS);
      indices.push(r1 + nextS, r2 + s, r2 + nextS);
    }
  }

  // Center vertex on flat top plane
  const centerVertexIdx = vertices.length / 3;
  vertices.push(0, hTotal, 0);
  uvs.push(0.5, 0.5);

  const lastDishRingIdx = dishStartIndex + (dishRings - 1) * rimSteps;
  for (let s = 0; s < rimSteps; s++) {
    const nextS = (s + 1) % rimSteps;
    indices.push(centerVertexIdx, lastDishRingIdx + nextS, lastDishRingIdx + s);
  }

  const topIndicesCount = indices.length - topIndicesStart;

  geom.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geom.setIndex(indices);

  // Group 0: Flat Top face (receives emblem texture)
  geom.addGroup(topIndicesStart, topIndicesCount, 0);
  // Group 1: Sides & Bevel (solid smooth plastic)
  geom.addGroup(0, wallIndicesCount, 1);

  geom.computeVertexNormals();

  return geom;
}

export default function Macropad3D({ onSelectSkill, activeSkill }) {
  const containerRef = useRef(null);
  const keyMeshesRef = useRef([]);
  const boardGroupRef = useRef(null);
  const pressedKeysSetRef = useRef(new Set());
  const mousePosRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Sync keycap press when activeSkill changes
  useEffect(() => {
    if (!activeSkill) return;
    const keyGroup = keyMeshesRef.current.find(m => m.userData.keyData.id === activeSkill.id);
    if (keyGroup && !keyGroup.userData.isPressed) {
      keyGroup.userData.isPressed = true;
      soundManager.playPress();
      const timer = setTimeout(() => {
        keyGroup.userData.isPressed = false;
        soundManager.playRelease();
      }, 140);
      return () => clearTimeout(timer);
    }
  }, [activeSkill]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const width = container.clientWidth || 550;
    const height = container.clientHeight || 580;

    const baseFov = 40;
    const camera = new THREE.PerspectiveCamera(baseFov, width / height, 0.1, 100);
    camera.position.set(0, 10.4, 13.6);
    camera.lookAt(0, 0.1, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.22;
    container.appendChild(renderer.domElement);

    // Dynamic framing ensures constant horizontal & vertical breadth so board is NEVER clipped
    const updateCameraFraming = (w, h) => {
      if (!w || !h) return;
      const aspect = w / h;
      camera.aspect = aspect;
      // Guarantee horizontal FOV >= 48 degrees across any screen width or aspect ratio
      const targetHFov = 48;
      if (aspect < 1.15) {
        const hFovRad = (targetHFov * Math.PI) / 180;
        camera.fov = (2 * Math.atan(Math.tan(hFovRad / 2) / aspect) * 180) / Math.PI;
      } else {
        camera.fov = baseFov;
      }
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
      if (renderer.domElement) {
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        renderer.domElement.style.maxWidth = '100%';
        renderer.domElement.style.display = 'block';
      }
    };
    updateCameraFraming(width, height);

    // 2. Lighting tailored to Teal-900 & Warm Gold theme
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 11, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    const goldRimLight = new THREE.DirectionalLight(0xfbbf24, 1.6);
    goldRimLight.position.set(-6, 5, -4);
    scene.add(goldRimLight);

    const softFill = new THREE.DirectionalLight(0xffffff, 0.6);
    softFill.position.set(0, -2, 5);
    scene.add(softFill);

    // 3. Board Group (Classic Isometric Angle matching TikTok reference)
    const boardGroup = new THREE.Group();
    const defaultRotX = 0.52;
    const defaultRotY = -0.32;
    const defaultRotZ = 0.06;
    boardGroup.rotation.set(defaultRotX, defaultRotY, defaultRotZ);
    boardGroup.position.set(0, 0.1, 0);
    boardGroup.scale.set(1.68, 1.68, 1.68);
    boardGroupRef.current = boardGroup;
    scene.add(boardGroup);

    // High-Profile CNC Aluminum Keyboard Chassis with Raised Perimeter Bezel ("Wadah")
    const cols = 4;
    const rows = 5;
    const spacingX = 0.96;
    const spacingZ = 0.96;

    // Enclosure Geometry Dimensions (Snug fit for touching keycaps)
    const innerW = 3.88;
    const innerD = 4.84;
    const innerR = 0.08;

    const outerW = 4.32;
    const outerD = 5.28;
    const outerR = 0.22;

    // Helper to generate rounded rectangle shapes for case and bezel
    const makeRoundedRectShape = (w, d, r) => {
      const shape = new THREE.Shape();
      shape.moveTo(-w / 2 + r, -d / 2);
      shape.lineTo(w / 2 - r, -d / 2);
      shape.quadraticCurveTo(w / 2, -d / 2, w / 2, -d / 2 + r);
      shape.lineTo(w / 2, d / 2 - r);
      shape.quadraticCurveTo(w / 2, d / 2, w / 2 - r, d / 2);
      shape.lineTo(-w / 2 + r, d / 2);
      shape.quadraticCurveTo(-w / 2, d / 2, -w / 2, d / 2 - r);
      shape.lineTo(-w / 2, -d / 2 + r);
      shape.quadraticCurveTo(-w / 2, -d / 2, -w / 2 + r, -d / 2);
      return shape;
    };

    // Authentic Navy Blue Case Material matching portfolio theme #0D2634
    const caseMat = new THREE.MeshStandardMaterial({
      color: 0x0D2634, // Primary Theme Navy Blue #0D2634
      roughness: 0.38,
      metalness: 0.45,
    });

    // 1. Bottom Chassis (Extends from y = -0.38 up to y = 0.08)
    const bottomShape = makeRoundedRectShape(outerW, outerD, outerR);
    const bottomGeom = new THREE.ExtrudeGeometry(bottomShape, {
      depth: 0.44,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.03,
      bevelThickness: 0.03,
    });
    const bottomMesh = new THREE.Mesh(bottomGeom, caseMat);
    bottomMesh.rotation.x = -Math.PI / 2;
    bottomMesh.position.y = -0.38;
    bottomMesh.castShadow = true;
    bottomMesh.receiveShadow = true;
    boardGroup.add(bottomMesh);

    // 2. Raised Bezel Rim ("Wadah" that cups keycaps up to y = 0.25, while keycap tops reach y = 0.50)
    const bezelShape = makeRoundedRectShape(outerW, outerD, outerR);
    const bezelHole = new THREE.Path();
    bezelHole.moveTo(-innerW / 2 + innerR, -innerD / 2);
    bezelHole.quadraticCurveTo(-innerW / 2, -innerD / 2, -innerW / 2, -innerD / 2 + innerR);
    bezelHole.lineTo(-innerW / 2, innerD / 2 - innerR);
    bezelHole.quadraticCurveTo(-innerW / 2, innerD / 2, -innerW / 2 + innerR, innerD / 2);
    bezelHole.lineTo(innerW / 2 - innerR, innerD / 2);
    bezelHole.quadraticCurveTo(innerW / 2, innerD / 2, innerW / 2, innerD / 2 - innerR);
    bezelHole.lineTo(innerW / 2, -innerD / 2 + innerR);
    bezelHole.quadraticCurveTo(innerW / 2, -innerD / 2, innerW / 2 - innerR, -innerD / 2);
    bezelHole.lineTo(-innerW / 2 + innerR, -innerD / 2);
    bezelShape.holes.push(bezelHole);

    const bezelGeom = new THREE.ExtrudeGeometry(bezelShape, {
      depth: 0.15,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.02,
      bevelThickness: 0.02,
    });
    const bezelMesh = new THREE.Mesh(bezelGeom, caseMat);
    bezelMesh.rotation.x = -Math.PI / 2;
    bezelMesh.position.y = 0.08;
    bezelMesh.castShadow = true;
    bezelMesh.receiveShadow = true;
    boardGroup.add(bezelMesh);

    // 3. Theme Navy Blue Switch Plate inside the cavity (matching theme --color-teal-800 #12344A)
    const plateGeom = new THREE.BoxGeometry(innerW - 0.02, 0.04, innerD - 0.02);
    const plateMat = new THREE.MeshStandardMaterial({
      color: 0x12344A, // Rich Navy Blue #12344A (authentic website theme)
      roughness: 0.32,
      metalness: 0.52,
    });
    const plateMesh = new THREE.Mesh(plateGeom, plateMat);
    plateMesh.position.y = 0.07;
    plateMesh.receiveShadow = true;
    boardGroup.add(plateMesh);



    // 5. Soft Contact Shadow
    const shadowGeom = new THREE.PlaneGeometry(outerW * 1.5, outerD * 1.5);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    const shadowGrad = sCtx.createRadialGradient(128, 128, 20, 128, 128, 120);
    shadowGrad.addColorStop(0, 'rgba(4, 15, 23, 0.85)');
    shadowGrad.addColorStop(0.5, 'rgba(5, 18, 28, 0.35)');
    shadowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = shadowGrad;
    sCtx.fillRect(0, 0, 256, 256);

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeom, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -0.42;
    boardGroup.add(shadowMesh);

    // 6. Construct Sculpted Keycaps
    const keycapGeom = createRealSculptedKeycapGeometry();

    const keyMeshes = [];

    MACROPAD_KEYS.forEach((keyData) => {
      const posX = (keyData.col - (cols - 1) / 2) * spacingX;
      const posZ = (keyData.row - (rows - 1) / 2) * spacingZ;
      const baseY = 0.10; // Rests snugly right above plate inside the case

      // Keycap Assembly
      const keyGroup = new THREE.Group();
      keyGroup.position.set(posX, baseY, posZ);

      // Create Keycap Materials:
      // Material 0: Flat Top face with authentic brand logo
      const decalTex = createKeycapTexture(keyData);
      const topMat = new THREE.MeshStandardMaterial({
        map: decalTex,
        roughness: 0.36,
        metalness: 0.06,
        side: THREE.DoubleSide,
      });

      // Material 1: Sides & Rounded Bevel (pure matching PBT satin plastic)
      const wallMat = new THREE.MeshStandardMaterial({
        color: keyData.color,
        roughness: 0.36,
        metalness: 0.06,
        side: THREE.DoubleSide,
      });

      // Single watertight mesh using multi-materials!
      const keycapMesh = new THREE.Mesh(keycapGeom, [topMat, wallMat]);
      keycapMesh.castShadow = true;
      keycapMesh.receiveShadow = true;
      keyGroup.add(keycapMesh);

      keyGroup.userData = {
        keyData,
        baseY,
        velocity: 0,
        isPressed: false,
        topMat,
        wallMat,
        keycapMesh,
      };

      boardGroup.add(keyGroup);
      keyMeshes.push(keyGroup);
    });

    keyMeshesRef.current = keyMeshes;

    // 5. Raycasting & Interaction Setup
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);
    let hoveredKey = null;

    const getIntersectedKey = (clientX, clientY) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const candidateMeshes = keyMeshes.map(g => g.userData.keycapMesh);
      const intersects = raycaster.intersectObjects(candidateMeshes, false);

      if (intersects.length > 0) {
        return intersects[0].object.parent;
      }
      return null;
    };

    const handlePointerMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const normX = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width) * 2 - 1));
      const normY = Math.max(-1, Math.min(1, ((e.clientY - rect.top) / rect.height) * 2 - 1));

      mousePosRef.current.targetX = normX;
      mousePosRef.current.targetY = normY;

      const hitKey = getIntersectedKey(e.clientX, e.clientY);
      if (hitKey !== hoveredKey) {
        if (hoveredKey) {
          hoveredKey.userData.wallMat.emissive.setHex(0x000000);
          hoveredKey.userData.topMat.emissive.setHex(0x000000);
        }
        hoveredKey = hitKey;
        if (hoveredKey) {
          hoveredKey.userData.wallMat.emissive.setHex(0x223344);
          hoveredKey.userData.topMat.emissive.setHex(0x223344);
          renderer.domElement.style.cursor = 'pointer';
        } else {
          renderer.domElement.style.cursor = 'default';
        }
      }
    };

    const handlePointerDown = (e) => {
      const hitKey = getIntersectedKey(e.clientX, e.clientY);
      if (hitKey) {
        hitKey.userData.isPressed = true;
        soundManager.playPress();

        if (onSelectSkill) {
          onSelectSkill(hitKey.userData.keyData);
        }
      }
    };

    const handlePointerUp = () => {
      keyMeshes.forEach((keyGroup) => {
        if (keyGroup.userData.isPressed) {
          keyGroup.userData.isPressed = false;
          soundManager.playRelease();
        }
      });
    };

    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const matchedKey = keyMeshes.find((k) =>
        k.userData.keyData.triggerKeys.includes(e.key)
      );

      if (matchedKey && !pressedKeysSetRef.current.has(e.key.toLowerCase())) {
        pressedKeysSetRef.current.add(e.key.toLowerCase());
        matchedKey.userData.isPressed = true;
        soundManager.playPress();

        if (onSelectSkill) {
          onSelectSkill(matchedKey.userData.keyData);
        }
      }
    };

    const handleKeyUp = (e) => {
      pressedKeysSetRef.current.delete(e.key.toLowerCase());

      const matchedKey = keyMeshes.find((k) =>
        k.userData.keyData.triggerKeys.includes(e.key)
      );

      if (matchedKey) {
        matchedKey.userData.isPressed = false;
        soundManager.playRelease();
      }
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('pointermove', handlePointerMove);
    domElem.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // 6. Animation Loop (Damped Mechanical Springs & Subtle Parallax)
    let animationFrameId;
    let lastTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const currentTime = performance.now();
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      // Smooth mouse parallax tilt
      mousePosRef.current.x += (mousePosRef.current.targetX - mousePosRef.current.x) * 0.05;
      mousePosRef.current.y += (mousePosRef.current.targetY - mousePosRef.current.y) * 0.05;

      boardGroup.rotation.x = defaultRotX + mousePosRef.current.y * 0.10;
      boardGroup.rotation.y = defaultRotY + mousePosRef.current.x * 0.15;

      // Keycap physics (mechanical spring rebound)
      keyMeshes.forEach((keyGroup) => {
        const u = keyGroup.userData;
        // Key travel: from 0.10 down to 0.06 (clean bottom-out onto plate)
        const targetY = u.isPressed ? u.baseY - 0.05 : u.baseY;
        const displacement = targetY - keyGroup.position.y;

        const springForce = displacement * 360;
        const dampingForce = -u.velocity * 26;
        const accel = springForce + dampingForce;

        u.velocity += accel * delta;
        keyGroup.position.y += u.velocity * delta;

        // Clamp to plate level
        if (keyGroup.position.y < u.baseY - 0.055) {
          keyGroup.position.y = u.baseY - 0.055;
          u.velocity = 0;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // 7. Responsive Resize Observer (guarantees accurate dimensions on layout shifts)
    const handleResize = () => {
      if (!container) return;
      updateCameraFraming(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 50 && h > 50) {
          updateCameraFraming(Math.round(w), Math.round(h));
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      domElem.removeEventListener('pointermove', handlePointerMove);
      domElem.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('resize', handleResize);

      keyMeshes.forEach((k) => {
        k.userData.topMat.map?.dispose();
        k.userData.topMat.dispose();
        k.userData.wallMat.dispose();
      });
      keycapGeom.dispose();
      bottomGeom.dispose();
      bezelGeom.dispose();
      caseMat.dispose();
      plateGeom.dispose();
      plateMat.dispose();

      shadowGeom.dispose();
      shadowTex.dispose();
      shadowMat.dispose();
      renderer.dispose();

      if (container.contains(domElem)) {
        container.removeChild(domElem);
      }
    };
  }, [onSelectSkill]);
  return (
    <div className="relative w-full min-w-0 flex flex-col items-center justify-center select-none overflow-visible">
      {/* 3D Canvas Viewport - Expanded Area Gerak */}
      <div 
        ref={containerRef} 
        className="w-full min-w-0 h-[620px] sm:h-[700px] lg:h-[780px] xl:h-[840px] flex items-center justify-center relative touch-none cursor-grab active:cursor-grabbing"
        title="Click mechanical keycaps or press keys on your keyboard!"
      />
    </div>
  );
}
