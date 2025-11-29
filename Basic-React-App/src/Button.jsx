function printhello(){
    console.log("hello");
}

function printBye(){
    console.log("bye bye")
}

function doubleclick(){
    console.log("on double click!");
}

export default  function Button(){
    return (
        <div><button onClick={printhello}>Click me</button>
        <p onMouseOver={printBye}> this parah is for event demo</p>
        <button onDoubleClick={doubleclick}>Double Click me</button>
        </div>
    );
}