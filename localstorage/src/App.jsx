import React, { use } from 'react'

const App = () => {
const user={
  username:"John Doe",
  email:"john.doe@example.com",
  age:30
}
const users=JSON.parse(localStorage.getItem("user"));
console.log(users);  

  return (
    <div>
      
    </div>
  )
}

export default App
