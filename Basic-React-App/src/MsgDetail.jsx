import Msg from "./MsgBox"
export default function MsgDetail(){
    let color="blue";
    let username="sagar";
    return(
        <>
      <Msg  username={"sagar"} textColor={"red"}/>
      <Msg  username={"Niraj"} textColor={"blue"}/>
        </>
    )
}