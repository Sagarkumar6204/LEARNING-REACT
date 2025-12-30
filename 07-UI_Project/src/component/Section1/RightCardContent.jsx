import React from 'react'
import { MoveUpRight } from 'lucide-react';
const  RightCardContent=( props)=> {
  return (
   
     <div className='absolute  top-0 left-0 h-full w-full   p-8 flex flex-col justify-between'>
    <h2 className='mt-[-6%] bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>1</h2>
        <div  >
        <p className='text-lg text-white mb-[-3%] mt-[100%]  ' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum accusamus provident tenetur ipsa labore ut.</p>
         </div>
         <div className='flex justify-between mb-[-7%]'>
        <button className='bg-blue-600 text-white font-medium px-7 py-2 rounded-full '>{props.tag}</button>
        <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full  '> <MoveUpRight /> </button>
        </div>
     </div>
     
  )
}

export default RightCardContent
