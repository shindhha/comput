import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'
import { SaberShape } from './SaberShape.jsx'
const vitesse = 3
export function Saber({position,hitBox}) {
    const gltf = useLoader(GLTFLoader, '/beat_saber_ideas/scene.gltf')
    const ref = useRef(null)
    let doAnimation = false;
    let cube1BB = hitBox;
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
                ref.current.position.y = 3
                ref.current.rotation.x = 0
                doAnimation = false
            }

            cube1BB.copy(ref.current.geometry.boundingBox).applyMatrix4(ref.current.matrixWorld);
        }
        
    })

    return (

        <mesh position={position}
            ref={ref}>
            <cylinderGeometry  args={[0.05, 0.05, 5, 12]} />
            <meshBasicMaterial  visible={false} />
            <SaberShape position={position}/>
        </mesh>
        
        
    )
}   



export default Saber
