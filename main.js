import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.setClearColor( 0xffffff, 0);

const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Farbe, Intensität (0-1)
scene.add(ambientLight);

/*
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
*/

const loader = new GLTFLoader();

loader.load('/assets/Clank.glb', function ( gltf ) {
	//console.log("Hier wird der Dude reingeladen!");
	scene.add( gltf.scene );

	// Durchlaufe alle Objekte im GLTF-Modell und gib ihre Namen aus
	gltf.scene.traverse((child) => {
		console.log("Object Name:", child.name);
	});

}, undefined, function ( error ) {
	console.log("Fehler!");
	console.error( error );
} );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	//cube.rotation.x += 0.01;
	//cube.rotation.y += 0.01;

	// Finde das Mesh im GLTF-Modell
	const gltfMesh = scene.getObjectByName("Armature");

	// Prüfe, ob das Mesh gefunden wurde
	if (gltfMesh) {
		// Führe Drehungen durch (Beispiel: 0.01 um x- und y-Achsen)
		//gltfMesh.rotation.x += 0.01;
		//gltfMesh.rotation.y += 0.01;
	}

	renderer.render( scene, camera );
}

window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	controls.update(); // Aktualisiere OrbitControls bei Größenänderungen
});

animate();