import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

export default function BeatSaberBox({saberHitBox,leftBox,rightBox,...props}) {
  let cube1BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3())

  function animateHalf(scene,halfCubeMesh,direction,animate) {
    if (!animate) return;
    halfCubeMesh.position.x += 0.05 * direction;
    halfCubeMesh.rotation.z += 0.05 * (direction *-1);

    if (rightBox.current.position.x <= -5) {
      stopAnimation(leftBox.current )
      stopAnimation(rightBox.current)
      setAnimate(false)

    }
  
  }

  function initHalf(mesh,hitedBox) {
    mesh.position.z = hitedBox.position.z
    mesh.position.x = hitedBox.position.x
    mesh.material.opacity = 1;
    mesh.material.transparent = true;
    mesh.material.needsUpdate = true;
  }

  function stopAnimation(mesh) {
    mesh.material.opacity = 0;
    mesh.material.transparent = true;
    mesh.material.needsUpdate = true;
  }
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const  {scene}  = useThree();
  const [animate, setAnimate] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => {
    meshRef.current.position.z -= 0.01 ;
    cube1BB.setFromObject(meshRef.current);
    if (saberHitBox.intersectsBox(cube1BB)) {
      initHalf(leftBox.current,meshRef.current)
      initHalf(rightBox.current,meshRef.current)
      meshRef.current.position.z = 10

      setAnimate(true)
    }

    if (meshRef.current.position.z < -5) {
      meshRef.current.position.z = 10
    }

    animateHalf(scene,leftBox.current,1,animate)
    animateHalf(scene,rightBox.current,-1,animate)
      
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







