import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { saberCoord } from './Saber'


let t = 0;
const clock = new THREE.Clock()
function Box({test,...props}) {
  let cube1BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3())

  t += clock.getDelta()
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => {
    meshRef.current.position.z -= 0.01 ;
    cube1BB.setFromObject(meshRef.current);
    if (saberCoord.intersectsBox(cube1BB)) {
      meshRef.current.position.z = 10;
      meshRef.current.position.x *= -1;
      test = !test;
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



export default Box