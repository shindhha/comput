/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap';




import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar';
import {Canvas} from '@react-three/fiber'
import Saber from './components/Saber.jsx';
import {OrbitControls,Box} from '@react-three/drei'
import * as THREE from 'three'
import BeatSaberBoxWay from './components/BeatSaberBoxWay'
import BeatSaberBox from './components/BeatSaberBox';
import { SaberShape } from './components/SaberShape.jsx';



function App() {
  const saberHitBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3())
  const boxs = [
    {link : "//github.com" ,image :"GitHub.webp"},
    {link : "//google.com" ,image :"google.webp"},
    {link : "//www.youtube.com/shorts/9qNZ7iQT1Zc" ,image :"GitHub.webp"},
    {link : "//github.com" ,image :"GitHub.webp"},
    {link : "//github.com" ,image :"GitHub.webp"}
  ]

  
  return (
    <React.Fragment>
      
    
      <div className="App bg-custom-grey">
      <NavBar className='bg-custom-grey'/>
      <Canvas id='canvas' className='container-fluid d-flex justify-content-center bg-custom-dark p-0 vh-100 '  camera={{position:[0,1,-8.5]}} >
        <BeatSaberBoxWay saberHitBox={saberHitBox} boxs={boxs}/>
        
        <Saber  position={[0,2.5,-5]} vitesse={10} hitBox={saberHitBox} />
      </Canvas>
      </div>
     </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);


export default App;



