// Benötigte Imports
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Einfügen für Kontrolle über Kamera
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//const controls = new OrbitControls(camera, renderer.domElement);

//Schritt 1: Erstellen einer Szene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

// Renderfenster erstellen und weiß färben
renderer.setSize( window.innerWidth, window.innerHeight );

//Hintergrundfarbe weiß gestalten
//renderer.setClearColor( 0xffffff, 0);
document.body.appendChild( renderer.domElement );


//Schritt 2: Anlegen eines Würfel- Objektes und hinzufügen zu der Szene
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

//Schritt 3: Szene Rendern
function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
animate();


//Schritt 4: Animieren unserers Würfels
/*
cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
*/

//Schritt 5: Einfügen eines Modell Loaders für 3D Objekt aus Blender
/*
const loader = new GLTFLoader();
loader.load('/assets/Clank.glb', function ( gltf ) {
	scene.add( gltf.scene );

	// Durchlaufe alle Objekte im GLTF-Modell und gib ihre Namen aus
	-> Schritt 6

}, undefined, function ( error ) {
	console.log("Fehler!");
	console.error( error );
} );
*/

//Schritt 6: Finden des Modells innerhalb der Szene. 
//Dafür werden alle Childs ausgeben
/*
	// Durchlaufe alle Objekte im GLTF-Modell und gib ihre Namen aus
	gltf.scene.traverse((child) => {
		console.log("Object Name:", child.name);
	});
*/

//Schritt 7: Einfügen eines Ambient Lights, damit das Modell gesehen wird
/*
const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Farbe, Intensität (0-1)
scene.add(ambientLight);
*/


//Schritt 8: Einfügen des Animationsloops innerhalb der animation()
/*
	const gltfMesh = scene.getObjectByName("Armature");

	if (gltfMesh) {
		gltfMesh.rotation.y += 0.01;
	}
*/

//Schritt 9: Hinzufuegen eines Event Listeners für das Window
/*
	window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	controls.update(); // Aktualisiere OrbitControls bei Größenänderungen
	});
*/

