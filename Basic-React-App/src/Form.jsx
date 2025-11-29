function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
}

export default function Form(){
    return(
        <form action="">
        <input type="text" name="something" id="something" placeholder="Write Something here!" />
        <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}