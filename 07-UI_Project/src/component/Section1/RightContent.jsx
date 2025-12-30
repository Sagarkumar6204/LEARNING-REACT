import React from 'react'
import RightCard from './RightCard'

function RightContent(props) {
   console.log(props.users)
  return (
    <div className='h-full w-2/3 p-6 bg-blue-200 rounded-[2%] flex  overflow-auto flex-nowrap gap-10  '>

     {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}  />
     })}

    </div>
  )
}

export default RightContent
