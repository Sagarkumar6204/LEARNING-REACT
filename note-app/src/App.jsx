import React from "react";

const App = () => {
  const formHandler = (e) => {
    e.preventDefault();
    console.log("form submitted!");
  };

  return (
    <div className="h-screen bg-black text-white p-10">
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
        className="flex items-start justify-between  gap-5 p-10"
      >
        <div className="flex w-1/2 items-start flex-col gap-2 ">
          <input
            type="text"
            className="w-full font-medium  px-5 py-5 border-2  rounded"
            placeholder="Enter notes Heading..."
          />
          <input
            type="text"
            className=" w-full font-medium h-20 px-5 py-5 border-2 rounded"
            placeholder="Enter a details!"
          />
          <button className="font-medium w-full px-5 py-2 bg-white text-black rounded">
            Add Note
          </button>
        </div>

        <img
          className="h-60 rotate-y-180"
          src="https://static.vecteezy.com/system/resources/previews/049/655/129/non_2x/a-man-writing-on-a-desk-with-a-pen-and-paper-png.png"
          alt=""
        />
      </form>
      <div className="flex flex-wrap p-10 gap-5">
        <h1 className="text-xl font-bold">Your Notes</h1>
        <div className="container flex items-start justify-start gap-5">
          <div className="h-52 w-52 rounded-2xl bg-white"> </div>
            <div className="h-52 w-52 rounded-2xl bg-white"></div>
         
        </div>
      </div>
    </div>
  );
};

export default App;
