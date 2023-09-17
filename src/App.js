import './App.css';
import React from 'react';
import * as THREE from 'three'
import Thumbnails from './components/Thumbnails';
import SectionFadeIn from './components/SectionFadeIn';
import NavBar from './components/NavBar';
import fadeIn from './animations/FadeIn';

const canvas  = document.getElementById('canvas')


let t = 0

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(100)

const renderer  = new THREE.WebGL1Renderer({canvas, antialias: true})

renderer.setPixelRatio(window.devicePixelRatio * 3);

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0x049EF4})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)
scene.background = new THREE.Color(0x070707)
camera.position.set(0,0,3)
renderer.render(scene,camera)




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
    mesh.rotation.y += (newMX - onclickX) / 2000;
    mesh.rotation.x += (newMy -  onclickY) / 2000;
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



