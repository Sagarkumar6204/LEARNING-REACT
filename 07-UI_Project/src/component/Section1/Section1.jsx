import React from 'react'
import Navbar from './Navbar'
import Pager1Content from './Pager1Content'

const Section1 = (props) => {
 
  return (
    <div className='h-screen'>
      <Navbar/>
      <Pager1Content users={props.users}/>
    </div>
  )
}

export default Section1
