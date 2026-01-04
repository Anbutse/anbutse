import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

window.addEventListener('load', () => {
    const container = document.getElementById('hero-canvas');
    const hero = document.querySelector('.hero');

    if (!container || !hero) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        60,
        hero.clientWidth / hero.clientHeight,
        0.1,
        100
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setSize(hero.clientWidth, hero.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // 20-гранник
    const geometry = new THREE.IcosahedronGeometry(2, 0);
    const material = new THREE.MeshStandardMaterial({
        color: 0xFCFCFC,          // основной цвет
        roughness: 0.5,
        metalness: 0,
        emissive: 0xEBEBEB,       // для мягких темных участков
        emissiveIntensity: 0.6,
        transparent: true,
        opacity: 1             // контролирует «размытие» визуально
    });

    const polyhedron = new THREE.Mesh(geometry, material);
    scene.add(polyhedron);

    // Свет
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    function animate() {
        polyhedron.rotation.x += 0.0045;
        polyhedron.rotation.y += 0.0045;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
        const w = hero.clientWidth;
        const h = hero.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    });
});