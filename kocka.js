var scene = new THREE.Scene();
scene.background = new THREE.Color(0x010615);
let sredina = document.getElementById("sredina");
var camera = new THREE.PerspectiveCamera(
  50,
  sredina.offsetWidth / sredina.offsetHeight,
  0.1,
  1000
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(sredina.offsetWidth, sredina.offsetHeight);
sredina.appendChild(renderer.domElement);
var geometry = new THREE.BoxGeometry();
var texture = new THREE.TextureLoader().load("img/OT.jpg");
var material = new THREE.MeshBasicMaterial({ map: texture });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 2;
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
