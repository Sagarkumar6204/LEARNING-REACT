import Products from "./Products"

function ProductTab(){
    //let features=[<li>"hi-tech"</li>, <li>"durable"</li>, <li>"fast"</li>];
   // let features=["hi-tech", "durable", "fast"];
    //let option={a:"hi-tech",b:"durable", c:"fast"};


let styles={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems: "center",
    margin: "15px",
    

}
    return (
        <div style={styles}>
          
        <Products title={"logitech mk master"} idx={0}  />
           <Products title={"Apple Pencil (2nd Gen) "} idx={1}/>
              <Products title={"Zebronics Zebster"} idx={2}/>
                <Products title={"Potronics wireless"} idx={3}/>
                 </div>
                 //agar render karate samay mein ham extra info dete hai use ham react props kehte hai
    );
}
export default ProductTab;