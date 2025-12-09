import React from "react";
import"./Comment.css";
import CommentsForm from "./CommentsForm";
export default function Comment(){
    let [comments,setComments]=React.useState([{
        username:"ask",
        remarks:"good",
        rating:4
    }]);
   let  addNewComment=(comment)=>{
        setComments((currComments)=>[...currComments,comment]);
        console.log("added new comment!!");
        
    }
return( 
    <>
        <h3>All Comments</h3>
        {comments.map((comment, idx) => (
  <div className="comment" key={idx}>
    <span>{comment.remarks}</span>
    &nbsp;
    <span>(rating={comment.rating})</span>
    <p>-{comment.username}</p>
  </div>
))}

    
    <hr />
     <CommentsForm addNewComment={addNewComment}/>
    </>

   
)
}