/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Artjoms Horosilovs (https://sketchfab.com/Artjoms_Horosilovs)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/sea-keep-lonely-watcher-09a15a0c14cb4accaf060a92bc70413d
Title: Sea Keep "Lonely Watcher"
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import island from '../assets/sea_keep_lonely_watcher.glb'
export function Model({isRotating,setIsRotating,setCurrentStage,...props}) {


  const {gl,viewport}=useThree();
  const lastX=useRef(0);
  const isIslandRef=useRef();
  const rotationSpeed=useRef(0);
  const DampingFactor=0.95;
  const { nodes, materials} = useGLTF(island);
  const handlePointerDown=(e)=>{
e.stopPropagation();
e.preventDefault();
const clientX=e.touches ? e.touches[0].clientX : e.clientX;
lastX.current=clientX;
setIsRotating(true);
  }
  const handlePointerUp=(e)=>{
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
   
      }
      const handlePointerMove=(e)=>{
        e.stopPropagation();
        e.preventDefault();
        if (isRotating) {
          const clientX=e.touches ? e.touches[0].clientX : e.clientX;
          const delta= (clientX - lastX.current) / viewport.width;
          isIslandRef.current.rotation.y += delta * 0.01 * Math.PI;
          lastX.current=clientX;
          rotationSpeed.current=delta * 0.01 * Math.PI
        }
          }
        const handleKeyDown=(e)=>{
          if (e.key === 'ArrowLeft') {
            if (!isRotating) {
 setIsRotating(true);
 isIslandRef.current.rotation.y += 0.01 * Math.PI;       
            }
          }
          if (e.key === 'ArrowRight') {
            if (!isRotating) {
              setIsRotating(true);
              isIslandRef.current.rotation.y -= 0.01 * Math.PI;       
                         }
          }
        }
        const handleKeyUp=(e)=>{
          if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            setIsRotating(false);
          }
        }
useEffect(()=>{
  const canvas=gl.domElement;
  canvas.addEventListener('pointerdown',handlePointerDown);
  canvas.addEventListener('pointermove',handlePointerMove);
  canvas.addEventListener('pointerup',handlePointerUp);
document.addEventListener('keydown',handleKeyDown);
document.addEventListener('keyup',handleKeyUp)
return ()=>{
  canvas.removeEventListener('pointerdown',handlePointerDown);
  canvas.removeEventListener('pointermove',handlePointerMove);
  canvas.removeEventListener('pointerup',handlePointerUp);
document.removeEventListener('keydown',handleKeyDown);
document.removeEventListener('keyup',handleKeyUp)
}

},[gl,handlePointerDown,handlePointerMove,handlePointerUp])
useFrame(()=>{
  if (!isRotating) {
    rotationSpeed.current *= DampingFactor;
    if (Math.abs(rotationSpeed.current) < 0.001) {
      rotationSpeed.current=0;
     
    }
    isIslandRef.current.y +=rotationSpeed.current;
  }
 
  else{
    const rotation=isIslandRef.current.rotation.y;
    const normalizedRotation=((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    switch (true) {
      case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
        setCurrentStage(4)
        break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3)
          break;
          case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
        setCurrentStage(2)
        break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        setCurrentStage(1)
        break;
      default:
        setCurrentStage(null)
    }
  }
})
  return (
    <group {...props} ref={isIslandRef} dispose={null}>
      <group position={[17.117, 218.356, 23.591]} rotation={[-Math.PI / 2, 0, Math.PI]}>
        <group position={[33.745, 38.713, -60.289]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fortress_Fortress_0.geometry}
            material={materials.Fortress}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fortress_Fortress_0_1.geometry}
            material={materials.Fortress}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fortress_Fortress_0_2.geometry}
            material={materials.Fortress}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fortress_Environment_0.geometry}
            material={materials.Environment}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fortress_Sand_0.geometry}
            material={materials.Sand}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sea_Sea_0.geometry}
        material={materials.material}
        position={[-1.388, 326.224, 14.92]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sky_Sky_0.geometry}
        material={materials.material_4}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>

    // <group {...props} dispose={null} ref={isIslandRef}>
    //   <group position={[17.117, 218.356, 23.591]} rotation={[-Math.PI / 2, 0, Math.PI]}>
    //     <group
    //       position={[17.11673, 218.35593, 23.59072]}
    //       rotation={[-Math.PI / 2, 0, Math.PI]}
    //       userData={{ name: 'Fortress' }}>
    //       <group position={[33.74526, 38.71275, -60.28922]} userData={{ name: 'Object_4' }}>
    //         <mesh
    //           geometry={nodes.Fortress_Fortress_0.geometry}
    //           material={materials.Fortress}
    //           userData={{ name: 'Fortress_Fortress_0' }}
    //         />
    //         <mesh
    //           geometry={nodes.Fortress_Fortress_0_1.geometry}
    //           material={materials.Fortress}
    //           userData={{ name: 'Fortress_Fortress_0' }}
    //         />
    //         <mesh
    //           geometry={nodes.Fortress_Fortress_0_2.geometry}
    //           material={materials.Fortress}
    //           userData={{ name: 'Fortress_Fortress_0' }}
    //         />
    //         <mesh
    //           geometry={nodes.Fortress_Environment_0.geometry}
    //           material={materials.Environment}
    //           userData={{ name: 'Fortress_Environment_0' }}
    //         />
    //         <mesh
    //           geometry={nodes.Fortress_Sand_0.geometry}
    //           material={materials.Sand}
    //           userData={{ name: 'Fortress_Sand_0' }}
    //         />
    //       </group>
    //     </group>
    //     <mesh
    //       geometry={nodes.Sea_Sea_0.geometry}
    //       material={materials.material}
    //       position={[-1.38771, 326.22403, 14.9202]}
    //       rotation={[-Math.PI / 2, 0, 0]}
    //       userData={{ name: 'Sea_Sea_0' }}
    //     />
    //     <mesh
    //       geometry={nodes.Sky_Sky_0.geometry}
    //       material={materials.material_4}
    //       rotation={[-Math.PI / 2, 0, 0]}
    //       userData={{ name: 'Sky_Sky_0' }}
    //     />
    //   </group>
    // </group>
  )
}


useGLTF.preload('/sea_keep_lonely_watcher.glb')
