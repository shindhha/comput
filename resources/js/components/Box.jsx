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
  const [color, setColor] = useState(0xffffff);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onPointerDown={(event) => {
            var onclickX = event.clientX;
            var onclickY = event.clientY;
            const mouseMove = (event) => {
            const deltaX = event.clientX - onclickX;
            const deltaY = event.clientY - onclickY;
            meshRef.current.rotation.x -= deltaY * 0.005;
            meshRef.current.rotation.y += deltaX * 0.005;
            onclickX = event.clientX;
            onclickY = event.clientY;
        };

        window.addEventListener('mousemove', mouseMove);

        const pointerUp = () => {
            window.removeEventListener('mousemove', mouseMove);

            window.removeEventListener('pointerup', pointerUp);
        };

        window.addEventListener('pointerup', pointerUp);
      }}>
      <boxGeometry args={[1, 1, 1]}/>
      <meshBasicMaterial color={0x049EF4} />
    </mesh>
  )
}



export default Box