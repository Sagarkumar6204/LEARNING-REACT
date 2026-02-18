import React from 'react';
import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState("");

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("form submitted!")
  }
  return (
    <div>
   <form  onSubmit={(e)=>{
    submitHandler(e)}}>
    <input type="text" name="" id="" placeholder="Enter a name"
    value={title}
    onChange={(e)=>{
      console.log("You entered:",e.target.value);
      setTitle(e.target.value);
    }}/>
    <button >Submit</button>
   </form>
    </div>
  )
}

export default App
        