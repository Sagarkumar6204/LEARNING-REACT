import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";

function App() {

  return( //isme ham sirf ek html element return karte hai agr ek se jyada hoto simply ham div ke andarkar skte h

// component return karne ke liye last main hame name/ use karna padta hai

    <> 
      <Title/> 
      <ProductTab/>
      <Title/>
     <h2>return text from inside</h2>

  
    </>
    //<>....</> ye combine karrha bina extra node bnaye like div div div ye sabko 1 mein combine karha hai
);
}


export default App;


