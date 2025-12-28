import { useState } from "react";
import { genTicket,sum } from "./Helper";
import Ticket from "./Ticket";

export default function Lottery({n=3,winCondition}) {
let[ticket, setTickets] = useState (genTicket(n));
let isWinning=winCondition(ticket);

let buyTicket=()=>{
    setTickets(genTicket(n));
};

  return (
    <div className="ticket"><h1>Lottery Game Component</h1>
   <Ticket ticket={ticket}/>
    <button onClick={buyTicket}>Buy New Ticket</button>
   <h3 style={{color:"white"}}>
  {isWinning ? "🎉 Congratulations, you won!" : ""}
</h3>

    </div>
  )
}