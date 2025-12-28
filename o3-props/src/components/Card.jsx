import React from 'react'

function Card(props) {
    console.log(props.user)
  return (
    <div>
       <div className="card">
        <img src="https://images.unsplash.com/photo-1760434600537-024e2771d580?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1MHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8" alt="" />
    <h1>{props.user}, {props.age}</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
