import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


// import * as THREE from "three";

// // Detect mobile
// if (!/Mobi|Android/i.test(navigator.userAgent)) {
//   document.body.innerHTML = "<h2 style='color:white;text-align:center;margin-top:40vh;'>Mobile only 🕹️</h2>";
//   throw new Error("Mobile only");
// }

// // Try locking orientation
// if (window.screen.orientation && window.screen.orientation.lock) {
//   window.screen.orientation.lock("landscape").catch((err) => {
//     console.log("Orientation lock not supported:", err);
//   });
// }

// // Create the scene
// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x111111);

// // Camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(0, 3, 5);
// camera.lookAt(0, 0, 0);

// // Renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Lights
// const light = new THREE.PointLight(0xffffff, 1);
// light.position.set(5, 5, 5);
// scene.add(light);

// const ambient = new THREE.AmbientLight(0x404040);
// scene.add(ambient);

// // Marble (the player)
// const marbleGeo = new THREE.SphereGeometry(0.3, 32, 32);
// const marbleMat = new THREE.MeshStandardMaterial({ color: 0x00bfff });
// const marble = new THREE.Mesh(marbleGeo, marbleMat);
// scene.add(marble);

// // Plane (floor)
// const planeGeo = new THREE.PlaneGeometry(10, 10);
// const planeMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
// const plane = new THREE.Mesh(planeGeo, planeMat);
// plane.rotation.x = -Math.PI / 2;
// scene.add(plane);

// // Handle resizing
// window.addEventListener("resize", () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// // Gyroscope control
// let tiltX = 0; // left-right
// let tiltY = 0; // forward-back

// function handleOrientation(event) {
//   // Map device tilt to game tilt
//   tiltX = event.gamma / 30; // Left/right
//   tiltY = event.beta / 30;  // Forward/back
// }

// // iOS needs permission
// function enableGyro() {
//   if (typeof DeviceOrientationEvent.requestPermission === "function") {
//     DeviceOrientationEvent.requestPermission().then((response) => {
//       if (response === "granted") {
//         window.addEventListener("deviceorientation", handleOrientation);
//       }
//     });
//   } else {
//     window.addEventListener("deviceorientation", handleOrientation);
//   }
// }

// document.body.addEventListener("click", enableGyro, { once: true });

// // Animation
// let velocity = { x: 0, z: 0 };

// function animate() {
//   requestAnimationFrame(animate);

//   // Basic physics-ish movement
//   velocity.x += tiltX * 0.01;
//   velocity.z += tiltY * 0.01;

//   // Friction
//   velocity.x *= 0.98;
//   velocity.z *= 0.98;

//   // Move marble
//   marble.position.x += velocity.x;
//   marble.position.z += velocity.z;

//   // Keep marble within bounds
//   marble.position.x = Math.max(-4.5, Math.min(4.5, marble.position.x));
//   marble.position.z = Math.max(-4.5, Math.min(4.5, marble.position.z));

//   renderer.render(scene, camera);
// }

// animate();
