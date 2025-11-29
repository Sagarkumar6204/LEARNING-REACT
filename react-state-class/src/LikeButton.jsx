import { useState } from "react"

export default function LikeButton(){
    let [isLiked, setLiked]=useState(false);
    let [clicks, setClicks]=useState(0);
    let toggleLike=()=>{
        setLiked(!isLiked);
        setClicks(clicks+1);
       
    }
    let likeStyle={color:"red"};
    return (
        <div>
            <p>likes:{clicks}</p>
            <p onClick={toggleLike}>
               {
                isLiked?<i class="fa-solid fa-heart" style={likeStyle}></i>:<i className="fa-regular fa-heart"></i>
               }
                </p>
        </div>
    )
}