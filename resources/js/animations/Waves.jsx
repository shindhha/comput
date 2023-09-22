import { BoxGeometry, BufferAttribute, BufferGeometry , Clock} from "three"

function Waves(props) {
    let t = 0
    const clock = new Clock()

    const space = 8, nb = 100, amp = 0.1, fre = 1, pi2= Math.PI*3
    const geometry = new BufferGeometry()
    const positions = new Float32Array( nb * nb * 3 )
    const colors = new Float32Array( nb * nb * 3 )
    let k = 0
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
    geometry.setAttribute( 'position', new BufferAttribute( positions, 3 ) )
    geometry.setAttribute( 'color', new BufferAttribute( colors, 3 ) )
    geometry.computeBoundingBox()
    loop()


    function loop() {
        t += clock.getDelta()
        animeGeometry(geometry, t)
        requestAnimationFrame(loop)
    }
    return (
        <mesh geometry={geometry}>
             <meshBasicMaterial vertexColors={true} />
        </mesh>
    )
}

function animeGeometry(geometry, progress) {
    const space = 4, nb = 100, amp = 0.35, pi2= Math.PI*2
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
            geometry.attributes.color.setZ(k, j/nb * intensity)
            k ++
        }
    }
    geometry.attributes.position.needsUpdate = true
    geometry.attributes.color.needsUpdate = true
}


export default Waves