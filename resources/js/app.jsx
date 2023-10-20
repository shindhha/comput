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
import Saber from './components/Saber';
import {OrbitControls,Box} from '@react-three/drei'
import * as THREE from 'three'
import BeatSaberBoxWay from './components/BeatSaberBoxWay'
import BeatSaberBox from './components/BeatSaberBox';
function App() {
  const saberHitBox = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3())

  
  return (
    <React.Fragment>
      
    
      <div className="App bg-custom-grey">
      <NavBar className='bg-custom-grey'/>
      <Canvas id='canvas' className='container-fluid d-flex justify-content-center bg-custom-dark p-0 vh-100 '  camera={{position:[0,1,-3]}} >
        <OrbitControls/>
        <BeatSaberBoxWay saberHitBox={saberHitBox} nbBox={5}/>

        <Saber  position={[1,0,3]} vitesse={10} hitBox={saberHitBox} />
        <gridHelper args={[20, 20, 0xff0000, 'teal']}/>
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



