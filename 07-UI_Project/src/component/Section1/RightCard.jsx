import React from 'react'

import RightCardContent from './RightCardContent';

function RightCard(props) {
  return (
    <div className='h-full w-80 rounded-4xl overflow-hidden relative '> 
     <img className='h-full w-full object-cover ' src={props.img} alt="" />
    <RightCardContent tag={props.tag}/>
    
   
    </div>
  )
}

export default RightCard
