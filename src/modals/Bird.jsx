import React, { useRef } from 'react'
import birdScene from '../assets/bird.glb';
import { useEffect } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
function Bird({...props}) {
  const birdRef=useRef()
    const {scene,animations}=useGLTF(birdScene);
    const {actions}=useAnimations(animations,birdRef);
    useEffect(()=>{
   actions['Take 001'].play();
    },[])
    useFrame(({camera,clock})=>{
birdRef.current.position.y += Math.sin(clock.elapsedTime) * 0.02;
if (birdRef.current.position.x > camera.position.x + 50) {
  birdRef.current.rotation.y = Math.PI;
}
else if(birdRef.current.position.x > camera.position.x - 50){
  birdRef.current.rotation.y=0
}
if(birdRef.current.rotation.y === 0){
  birdRef.current.position.x += 0.02;
  birdRef.current.position.z -= 0.01;
}
else{
  birdRef.current.position.y -= 0.02;
  birdRef.current.position.z += 0.02;
}
    })
  return (
    <mesh position={[-10,1,0]} scale={[0.006,0.006,0.006]} ref={birdRef}>
<primitive object={scene} />
    </mesh>
  )
}

export default Bird
