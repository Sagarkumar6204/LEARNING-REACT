import "./App.css";
import Title from "./Title";
import ProductTab from "./ProductTab";

function Description(){
  return <h2>I am the Description</h2>
}


function App() {

  return (
  <div>
    <h2>This is my app component</h2>
    <Title/> 
    <ProductTab/>
 
</div>
    
)
}

export default App
