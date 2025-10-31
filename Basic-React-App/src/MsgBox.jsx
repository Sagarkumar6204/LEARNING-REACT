//ACTIVITY : 1
//show a hello message to the user in different color
//pass 2 value as props : username  & text color


// export ke saath function joki ye export karega saath hee props v use kiya hai
export default function MsgBox({userName,textColor})

{
  
return <h1 style={{color:textColor}}>hello, {userName}</h1>
}