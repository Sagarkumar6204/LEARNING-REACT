import {useState, useEffect, use} from "react";
export default function Counter(){
    let [countX,setCountX]=useState(0);
    let [countY,setCountY]=useState(0);
 let incCountX=()=>{
    setCountX(countX+1);
    }
     let incCountY=()=>{
setCountY(countY+1);
    }

    useEffect(function printSomething(){//koi v state change hoga to ye useEffect execute hoga or apna kaam complete karega
        console.log("this is a side-effect");
        
    },[countX]);//dependency array me sirf countX hai to jab bhi countX change hoga tabhi ye useEffect chalega
    //agr empty hota to sirf first render pe chalta
    //agr dono state hote to dono state change pe chalta

    return (
        <div>
            <h3>
                Count={countX}
                <button onClick={incCountX}>+1</button>
            </h3>
             <h3>
                Count={countY}
                <button onClick={incCountY}>+1</button>
            </h3>
        </div>
    )
}