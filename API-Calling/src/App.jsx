import React from 'react';
import axios from 'axios';

const App = () => {
  async function getData(){
    console.log('Getting data...')
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
     const data = await response.json()
    console.log(data)
  }

  async function axiosApiCall() {

    console.log('Getting data with axios...')
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response.data)
  }
  return (
    <div>
      <button onClick={axiosApiCall                           }>Get Data!</button>
    </div>
  )
}

export default App
