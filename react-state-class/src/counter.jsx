import { useState } from "react";

export default function counter() {
  let [count, setCount] = useState(0);
   let incCount=()=>{
        // count=count+1;
        setCount(count+1);
        console.log(count);
    };

  return (
    <div>
      <h3>Count={count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
