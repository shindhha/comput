import './App.css';
import React from 'react';
import * as THREE from 'three'
import Thumbnails from './components/Thumbnails';
import SectionFadeIn from './components/SectionFadeIn';
import NavBar from './components/NavBar';
import fadeIn from './animations/FadeIn';

const canvas  = document.getElementById('canvas')

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(70, 2000 / 2000)
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: 0x049EF4})
const cubeMesh = new THREE.Mesh(cubeGeometry,cubeMaterial)
const geometry = computeGeometry()
const material = new THREE.PointsMaterial( { size: 0.02, vertexColors: true } )
const mesh = new THREE.Points( geometry, material )
cubeMesh.position.y = 1.5
scene.add( mesh, cubeMesh)
camera.position.set(0, 2, -5)
camera.lookAt(0, -0.1, 0)

const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setPixelRatio(window.devicePixelRatio * 3);
const clock = new THREE.Clock()
let t = 0

loop()


function loop() {
  t += clock.getDelta()
  animeGeometry(geometry, t)
  mesh.rotation.y = 0.1*t
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}

function computeGeometry() {
  const space = 8, nb = 100, amp = 0.1, fre = 1, pi2= Math.PI*3

  const geometry = new THREE.BufferGeometry()

  const positions = new Float32Array( nb * nb * 3 )
	const colors = new Float32Array( nb * nb * 3 )

  let k = 0
  for ( let i = 0; i < nb; i ++ ) {
    for ( let j = 0; j < nb; j ++ ) {
      const x = i*(space/nb)-space/2
      const z = j*(space/nb)-space/2
      const y = amp * ( Math.cos(x*pi2*fre) + Math.sin(z*pi2*fre) )
      positions[ 3 * k + 0 ] = x
      positions[ 3 * k + 1 ] = y
      positions[ 3 * k + 2 ] = z
      const intensity =( y/amp)/2+0.3
      colors[ 3 * k + 0] = 0
      colors[ 3 * k + 1 ] = 1
      colors[ 3 * k + 2 ] = 0
      k ++
    }
  }
  geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) )
	geometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) )
	geometry.computeBoundingBox()
  return geometry
}



function animeGeometry(geometry, progress) {
  const space = 4, nb = 100, amp = 0.35, pi2= Math.PI*2
  const phase = progress
  const fre = 0.8 + Math.cos(progress)/2

  let k = 0
  for ( let i = 0; i < nb; i ++ ) {
    for ( let j = 0; j < nb; j ++ ) {
      const x = i*(space/nb)-space/2
      const z = j*(space/nb)-space/2
      const y = amp * ( Math.cos(x*pi2*fre+phase) + Math.sin(z*pi2*fre+phase) )
      geometry.attributes.position.setY(k, y)
      const intensity =( y/amp)/2+0.3
      geometry.attributes.color.setY(k, j/nb * intensity)
      k ++
    }
  }
  geometry.attributes.position.needsUpdate = true
  geometry.attributes.color.needsUpdate = true 
} 



var onclickX;
var onclickY;

var svgX = 0;
var svgY = 0;


function mouseUp() {
  canvas.removeEventListener('mousemove', mouseMouve);
  canvas.removeEventListener('mouseup' , mouseUp);
}

function mouseMouve(event) {
    
    var newMy = event.clientY;
    var newMX = event.clientX;

    if (svgX > onclickX) {
      if (svgX > newMX) onclickX = newMX;
    } else if (svgX < onclickX) {
      if (svgX < newMX) onclickX = newMX;
    }

    if (svgY > onclickY) {
      if (svgY > newMy) onclickY = newMy;
    } else if (svgY < onclickY) {
      if (svgY < newMy) onclickY = newMy;
    }
    cubeMesh.rotation.y += (newMX - onclickX) / 2000;
    cubeMesh.rotation.x += (newMy -  onclickY) / 2000;
    svgX = newMX;
    svgY = newMy;
    console.log("Svg : " + svgX + " new : " + newMX  + " click : " + onclickX)
    
    renderer.render(scene,camera)
}

canvas.addEventListener('mousedown', (event) => {
  onclickX = event.clientX;
  onclickY = event.clientY;
  canvas.addEventListener('mousemove',  mouseMouve)
  canvas.addEventListener('mouseup' , mouseUp)
})


function App() {
  return (
    <div className="App bg-custom-grey">
      <NavBar/>
      
      dsqds
      
      
      <SectionFadeIn title="COMMUNITY" css_element="bg-custom-dark">
          <Thumbnails header="VR">
          Téléportez-vous et explorez en toute liberté de nouveaux mondes virtuels, que ce soit en jouant, en développant des applications/jeux/... ou bien en regardant des vidéos.
Bon ça ne sera pas une expérience comme SAO, mais on pourrait s'y croire. 
          </Thumbnails>
          <Thumbnails header="Casque EEG">
          L'association dispose d'un électroencéphalogramme simplifié se focalisant sur le lobe frontal et pariétal. Mais c'est quoi ce charabia, cela permet de capter les ondes cérébrales sur les parties moteurs et émotionnelles. 
          </Thumbnails>
          <Thumbnails header="Tablettes Graphiques">
          L'association dispose de deux tablettes graphiques utilisées lors des événements comme les GameJams, Ludums ou pour nos créations graphiques.
Si cela vous tente, venez les tester ou participer à nos événements et réalisez vos propres créations. 
          </Thumbnails>
      </SectionFadeIn>

      <SectionFadeIn title="FEATURES" css_element="bg-custom-grey fade-in-element from-bottom">
          <Thumbnails header="LAN">
            Au cours de l'année, l'association organise des LANs se déroulant NON-STOP de 20h le vendredi à 20h le dimanche.
            Que vous soyez seul, en groupe, costumé, curieux, venez nous rejoindre lors de ces événements.
            Tout type de jeux est abordé, LoL, Factorio, 7DtoD, StartCraft II, OverWatch, ....., nos amis les consoles le sont aussi (Switch, Wii, ...), comme les jeux de plateau, de carte et de rôle.
            Une buvette est tenue au profit de l'association pour vous sustenter.
            Alors n'hésitez plus il y en a pour tous les goûts. 
          </Thumbnails>
          <Thumbnails header="GameJam" >
          Une game jam est un hackathon avec pour thème principal les jeux vidéos, mais pouvant aussi porter sur les jeux au sens large. Les participants, groupés en équipes, doivent créer un jeu dans un temps limité, généralement le temps d'un week-end, sur 24 à 72h, mais cela peu aussi bien se dérouler sur une semaine.
L'association en organise de temps à autre notamment lors des Ludums, si vous voulez participer n'hésitez pas à nous contacter, les informations serons mises sur nos réseaux sociaux. 
          </Thumbnails>
          <Thumbnails header="Réparation Informatiques">
          Que vous ayez un problème logiciel ou matériel, l'association vous propose de vous aider à réparer votre ordinateur/tablette/raspberry pi/téléphone/... chaque mercredi après-midi à partir de 14h
(Vous pouvez prendre contact par mail ou sur nos réseaux sociaux pour nous signaler votre problème) 
            
          </Thumbnails>
      </SectionFadeIn>
      
      
     </div>
  );
}




export default App;



