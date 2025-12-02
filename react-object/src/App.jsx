import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Todo from './Todo'

function App() {
 
  return (
  <div className="background-container"> 
      
      
      <div className="todo-list-content">
          <h1 style={{color:"red"}}> React To-Do List</h1>
          {Todo()}
      </div>

    </div>
  )
}

export default App
