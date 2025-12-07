import { useEffect, useState } from "react";
export default function Joker(){
     const URL="https://official-joke-api.appspot.com/random_joke";
 
       const getNewJoke=async()=>{
        let response=await fetch(URL);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline});

    }
    useEffect(()=>{async function getFirstJoke(){
        let response=await fetch(URL);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
       setJoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline});
    }getFirstJoke();
    },[]);
    let [joke,setJoke]=useState({getNewJoke});
   
    return(
        <div>
            <h3 style={{color:"yellow", textDecoration:"underline"}}>Joker</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button style={{backgroundColor:"skyblue", color:"black"}} onClick={getNewJoke}>Get a new Joke</button>
        </div>
    )
}