// Benötigte Imports
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Benötigte Konstanten
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);

// Renderfenster erstellen und weiß färben
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xffffff, 0);
document.body.appendChild( renderer.domElement );

// Lichter erstellen, um Modell zu beleuchten
const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Farbe, Intensität (0-1)
scene.add(ambientLight);

// Blender Datei laden
const loader = new GLTFLoader();
loader.load('/assets/Clank.glb', function ( gltf ) {
	scene.add( gltf.scene );

	// Durchlaufe alle Objekte im GLTF-Modell und gib ihre Namen aus
	gltf.scene.traverse((child) => {
		console.log("Object Name:", child.name);
	});

}, undefined, function ( error ) {
	console.log("Fehler!");
	console.error( error );
} );

// Kamera Platzierung ("Zoom")
camera.position.z = 5;

// Animationsloop
function animate() {
	requestAnimationFrame( animate );

	// Finde das Mesh im GLTF-Modell
	const gltfMesh = scene.getObjectByName("Armature");

	if (gltfMesh) {
		gltfMesh.rotation.y += 0.01;
	}

	// Anzeigen
	renderer.render( scene, camera );
}

// Aktualisiere Kamera und Renderer bei Größenänderungen des Fensters
window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	controls.update(); // Aktualisiere OrbitControls bei Größenänderungen
});

// Starte Animationsloop
animate();
