import { useState } from "react";

export default function Form(){
let[formData,setFormData]=useState({
    fullName:"",
    userName:"",
    password:"",
});
    // let handleNameChange=(e)=>{
       
    //     setFullName(e.target.value);//changes directly based on input 
    // }

    //   let handleUserName=(e)=>{
       
    //     setUserName(e.target.value);//changes directly based on input 
    // }
let handleInputChange=(e)=>{
    let fieldName=e.target.name;
    let newValue=e.target.value;
    console.log(newValue);
    setFormData((currData)=>{
       // currData[fieldName]=newValue;//[]isme use karna as a compute property name
        return{...currData, [fieldName]:newValue};

    });
    
}
let handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
    setFormData({
        fullName:"",
        userName:"",
        password:"",
    });
}

return(
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name: </label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} id="fullname" placeholder="Enter your name"/>
        <br /><br />
        <label htmlFor="username">User Name: </label>
        <input type="text" name="userName" value={formData.userName} onChange={handleInputChange} id="username" placeholder="Enter your username"/>

        <br /><br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} id="username" placeholder="Enter your username"/>

       <br /><br /> <button>Submit</button>
    </form>
)
}