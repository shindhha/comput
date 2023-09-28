import * as THREE from 'three'
import {Points } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'


function Waves(props) {
    
    const points = useRef(null)
    const ref = useRef(null)
    useFrame(() => {
        if (!ref.current) {
            return
        }
        t += clock.getDelta()
        points.current.rotation.y = 0.1*t
        animeGeometry(ref.current,t)
    })
    return (
        <points ref={points}>
            <bufferGeometry attach="geometry" ref={ref}>
                <bufferAttribute 
                 attach='attributes-position'
                 count={k}
                 itemSize={3}
                 array={positions}
                />
                <bufferAttribute 
                 attach='attributes-color'
                 itemSize={3}
                 array={colors}
                />

            </bufferGeometry>
            <pointsMaterial attach="material" size={0.015}  vertexColors={true}/>
        </points>
       
    )
}

let t = 0
let k = 0

const clock = new THREE.Clock()
const space = 8, nb = 100, amp = 0.1, fre = 1, pi2= Math.PI*3
const positions = new Float32Array( nb * nb * 3 )
const colors = new Float32Array( nb * nb * 3 )

for ( let i = 0; i < nb; i ++ ) {
    for ( let j = 0; j < nb; j ++ ) {
    const x = i*(space/nb)-space/2
    const z = j*(space/nb)-space/2
    const y = amp * ( Math.cos(x*pi2*fre) + Math.sin(z*pi2*fre) )
    positions[ 3 * k + 0 ] = x
    positions[ 3 * k + 1 ] = y
    positions[ 3 * k + 2 ] = z
    const intensity =( y/amp)/2+0.3
    colors[ 3 * k + 0] = 0
      colors[ 3 * k + 1 ] = 1
      colors[ 3 * k + 2 ] = 0
    
    k ++
    }
}
function animeGeometry(geometry, progress) {
    const space = 4, nb = 100, amp = 0.2, pi2= Math.PI
    const phase = progress
    const fre = 0.8 + Math.cos(progress)/2

    let k = 0
    for ( let i = 0; i < nb; i ++ ) {
        for ( let j = 0; j < nb; j ++ ) {
            const x = i*(space/nb) - space / 2
            const z = j*(space/nb)-space/2
            const y = amp * ( Math.cos(x*pi2*fre+phase) + Math.sin(z*pi2*fre+phase) )
            geometry.attributes.position.setY(k, y)
            const intensity =( y/amp)/2+0.3
            geometry.attributes.color.setY(k, i/nb * intensity)
            k ++
        }
    }
    geometry.attributes.position.needsUpdate = true
    geometry.attributes.color.needsUpdate = true
}


export default Waves