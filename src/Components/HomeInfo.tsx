import React from 'react'
const info={
    1:(
        <div className=' bg-blue-500 p-5 px-16 text-center  rounded-lg shadow-md shadow-blue-950 z-10'>
            <p className='text-white mb-3'>Hello I am <span className=' font-semibold'>Vishal Kundu</span></p>
            <p className='text-white'>I am a Frontend Web Developer</p>
        </div>
    ),
    2:(
        <div className=' bg-blue-500 p-5 px-16 text-center  rounded-lg shadow-md shadow-blue-950 z-10'>
            <p className='text-white'>Hello I am <span className=' font-semibold'>Vishal Kundu</span></p>
        </div>
    ),
    3:(
        <div className=' bg-blue-500 p-5 px-16 text-center  rounded-lg shadow-md shadow-blue-950 z-10'>
            <p className='text-white'>Hello I am <span className=' font-semibold'>Vishal Kundu</span></p>
        </div>
    ),
    4:(
        <div className=' bg-blue-500 p-5 px-16 text-center  rounded-lg shadow-md shadow-blue-950 z-10'>
            <p className='text-white'>Hello I am <span className=' font-semibold'>Vishal Kundu</span></p>
        </div>
    )}
function HomeInfo({currentStage}) {    
  return (info[currentStage])
}

export default HomeInfo
