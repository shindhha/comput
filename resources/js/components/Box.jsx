import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
var onclickX;
var onclickY;
var svgX = 0;
var svgY = 0;
function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onPointerDown={(event) => {
            // Store the initial mouse click coordinates
            var onclickX = event.clientX;
            var onclickY = event.clientY;
            // Define a function to handle mouse movement
            const mouseMove = (event) => {
            // Calculate the distance moved
            const deltaX = event.clientX - onclickX;
            const deltaY = event.clientY - onclickY;
            // Rotate the mesh based on mouse movement
            meshRef.current.rotation.x += deltaY * 0.01;
            meshRef.current.rotation.y += deltaX * 0.01;
            // Update the onclick coordinates
            onclickX = event.clientX;
            onclickY = event.clientY;
        };

        // Attach the mouseMove function to the global mousemove event
        window.addEventListener('mousemove', mouseMove);

        // Define a function to handle pointer up event
        const pointerUp = () => {
            // Remove the mouseMove function from the global mousemove event
            window.removeEventListener('mousemove', mouseMove);

            // Remove the pointerUp function from the global pointerup event
            window.removeEventListener('pointerup', pointerUp);
        };

        // Attach the pointerUp function to the global pointerup event
        window.addEventListener('pointerup', pointerUp);
      }}>
      <boxGeometry args={[3, 3, 3]}/>
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}



export default Box