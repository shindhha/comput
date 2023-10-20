import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useEffect } from 'react'

const vitesse = 10
export function Saber({position,hitBox}) {
    const ref = useRef<THREE.Mesh>(null)
    let doAnimation = false;
    let cube1BB:THREE.Box3 = hitBox;
    useEffect(() => {
        if (ref.current == null || ref.current == undefined) return

        cube1BB.setFromObject(ref.current);
        document.addEventListener('keypress', (event) => {
            if (ref.current == null || ref.current == undefined) return

            if (event.key == 'e') {
                if (doAnimation) {

                    ref.current.position.y = 0
                    ref.current.rotation.x = 0
                } else {
                    doAnimation = true
                }
                
            }
            if (event.key == 'd') {
                ref.current.position.x = -1
            }
            if (event.key == 'q') {
                ref.current.position.x = 1
            }

        })

    }, [])
    useFrame(() =>  {
        
        if (ref.current == null || ref.current == undefined) return

        if (doAnimation) {
            ref.current.rotation.x += 0.013 * vitesse
            ref.current.position.y -= 0.03 * vitesse
        }
        if (ref.current) {
            if (ref.current.position.y < -4) {
                ref.current.position.y = 0
                ref.current.rotation.x = 0
                doAnimation = false
            }

            cube1BB.copy(ref.current.geometry.boundingBox!).applyMatrix4(ref.current.matrixWorld);
        }
        
    })

    return (

        <mesh position={position}
            ref={ref}>
            <cylinderGeometry  args={[1, 1, 6, 12]} />
            <meshBasicMaterial color={0x049EF4}  />
        </mesh>
        
        
    )
}   



export default Saber
