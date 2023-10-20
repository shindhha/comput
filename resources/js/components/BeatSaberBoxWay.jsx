import React, { useRef, useState ,useEffect } from 'react';
import { Children } from 'react';
import BeatSaberBox from './BeatSaberBox'
import {Box} from '@react-three/drei'
export default function BeatSaberBoxWay({nbBox, saberHitBox}) {
    const  [children,setChildren] = useState([])
    const leftBox = useRef()
    const rightBox = useRef()


    useEffect(() => {
        // Random interval
        let randomInterval = Math.floor(Math.random() * 10000);
        if (children.length >= nbBox) return;
        const interval = setInterval(() => {
          setChildren([
            ...children, 
            <BeatSaberBox 
            key={children.length} 
            saberHitBox={saberHitBox} 
            position={[Math.random() < 0.5 ? 1 : -1 , 0, 10]}  
            rightBox={rightBox}
            leftBox={leftBox}
            />]);
        }, randomInterval);
    
        return () => {
          clearInterval(interval); // Nettoyez l'intervalle lorsque le composant est démonté
        };
      }, [children]);

    return (
        <React.Fragment>
            {children}
            <Box ref={leftBox} args={[0.50, 0.75, 0.75]} position={[0, 0, 0]} material-opacity={0} material-transparent />
            <Box ref={rightBox} args={[0.50, 0.75, 0.75]} position={[0, 0, 0]} material-opacity={0} material-transparent />
        </React.Fragment>
    );
}


