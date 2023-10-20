import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import {OrbitControls} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect } from 'react'
export let saberCoord = ""
export function Saber({hitBox,vitesse,position,test}) {
    const ref = useRef()
    let doAnimation = false;
    useEffect(() => {
        hitBox.setFromObject(ref.current);
        document.addEventListener('keypress', (event) => {
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
        if (doAnimation) {
            ref.current.rotation.x += 0.013 * vitesse
            ref.current.position.y -= 0.03 * vitesse
        }
        if (ref.current.position.y < -4) {
            ref.current.position.y = 0
            ref.current.rotation.x = 0
            doAnimation = false
        }
        if (test) {
            ref.current.position.x *= -1
            test = !test
        }
        hitBox.copy(ref.current.geometry.boundingBox).applyMatrix4(ref.current.matrixWorld);
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
