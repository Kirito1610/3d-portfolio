import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Loader from "../Components/Loader"
import { Model } from "../modals/island"
import Bird from "../modals/Bird"
import { useState } from "react";
import HomeInfo from "../Components/HomeInfo"
function Homepage() {
  const[isRotating,setIsRotating]=useState(false);
  const [currentStage,setCurrentStage]=useState(1);
  const adjustIsalandSize=()=>{
    let screenScale = null;
    let screenPosition = [5.5,-6.5,-45];
    let rotation=[0.1,0,0]
    if(window.innerWidth<765){
      screenScale = [0.1,0.1,0.1];
    }
    else{
      screenScale= [0.1,0.1,0.1]
    }
    return [screenScale,screenPosition,rotation]
  }
  const [screenScale,screenPosition,rotation]=adjustIsalandSize();
  return (
   <section className="w-full h-screen relative">
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-start mt-40 justify-center">
      {currentStage && <HomeInfo currentStage={currentStage} />}
    </div>
<Canvas className={`w-full h-screen bg-transparent ${isRotating ?' cursor-grabbing' : 'cursor-grab'}`} camera={{near:0.1,far:1000}}>
<Suspense fallback={<Loader />}>
<directionalLight position={[1,1,1]} intensity={2}/>
<ambientLight intensity={1} />
<pointLight />
<spotLight />
<hemisphereLight groundColor="#000" intensity={2} />
<Bird isRotating={isRotating} />
<Model position={screenPosition} setCurrentStage={setCurrentStage} scale={screenScale} isRotating={isRotating} setIsRotating={setIsRotating} rotation={rotation} />
</Suspense>
</Canvas>
   </section>
  )
}

export default Homepage
