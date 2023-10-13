import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { saberCoord } from './Saber'

let t = 0;
const clock = new THREE.Clock()
function Box({test,...props}) {
  let cube1BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3())

  t += clock.getDelta()
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const  {scene}  = useThree();
  let [cube, cube2] = [null,null];
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => {
    meshRef.current.position.z -= 0.05 ;
    cube1BB.setFromObject(meshRef.current);
    if (saberCoord.intersectsBox(cube1BB)) {
      test = !test;
      
      [cube , cube2] = cutCube(meshRef.current)
      scene.add( cube );
      scene.add( cube2 );
      scene.remove(meshRef.current)
      
    }

    if(cube != null && cube2 != null) {
      animateHalf(cube,1)
      animateHalf(cube2,-1)
    }
      
  })
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
        {...props}
        ref={meshRef}>
      <boxGeometry args={[0.75, 0.75, 0.75]}/>
      <meshBasicMaterial color={0xFFFF00} />
    </mesh>
  )
}

function cutCube(cubeMesh) {      
  const geometry = new THREE.BoxGeometry( 0.50, 0.75, 0.75 );
  const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );    
  const cube = new THREE.Mesh( geometry, material );
  const cube2 = new THREE.Mesh( geometry, material );
  cube.position.x = cubeMesh.position.x + 0.35;
  cube2.position.x = cubeMesh.position.x - 0.35;
  cubeMesh.geometry.dispose()
  cubeMesh.material.dispose()
  return [cube,cube2]
}

function animateHalf(halfCubeMesh,direction) {
    halfCubeMesh.position.x += 0.05 * direction;

}



export default Box