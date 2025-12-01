import { useState } from "react"

export default function LudoBoard(){
    let[moves, setMoves]=useState({blue:0, red: 0, yellow:0, green:0});
    let [arr,setArr]=useState(['no moves']);
   let updateBlue=()=>{
    //moves.blue+=1;
    console.log(`moves.blue= ${moves.blue}`);
    //setMoves({...moves, blue:moves.blue+1});
    // //spreead karke bhej rahe hai obj ko taaki actual change pata chale js ko or re render kar paaye
    setMoves((preMoves)=>{
       return {...preMoves, blue:preMoves.blue+1}
    });
    arr.push("blue moves");//array andar change hoke same array mein rehta to react ko change nahi milta hia isiliye render nahi kart hai updates to isko ...arr spread karke bhjege

    setArr((prevArr)=>{return[...prevArr,"blue moves"]});
    console.log(arr);
   }

      let updateYellow=()=>{
   
    console.log(`moves.yellow= ${moves.yellow}`);
 
    setMoves((preMoves)=>{
       return {...preMoves, yellow:preMoves.yellow+1}
    });

   }
  let updateGreen=()=>{
   
    console.log(`moves.green= ${moves.green}`);
 
    setMoves((preMoves)=>{
       return {...preMoves, green:preMoves.green+1}
    });

   }

     let updateYRed=()=>{
   
    console.log(`moves.red= ${moves.red}`);
 
    setMoves((preMoves)=>{
       return {...preMoves, red:preMoves.red+1}
    });

   }

    return (
        <div>
            <p>Game Begins</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue Moves={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                 <p>Yellow Moves={moves.yellow}</p>
                <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>
                 <p>Green Moves={moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                 <p>Red Moves={moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateYRed}>+1</button>
            </div>
        </div>
    )
}