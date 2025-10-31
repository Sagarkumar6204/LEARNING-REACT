import "./Products.css";
import Price from "./Price";
// function Product(props) ye v sahi hai
// function Product({title,price=1})//ye destructuring horha hai kyuki props ek object hota hai or object mein  key value pairs hote hai
// //default price=1;
// {   
   

//    // console.log(option.b);
//   let styles={backgroundColor : price > 30000 ? "yellow" : null}
//   //let discount= price > 30000 ? "Discount of 5%" : "";
//        return (
// <div className="Product" style={styles}>
   
//     <h3> {title}</h3>
//     <h4>Price :{price}</h4>
//    {price > 30000 ? <p>"Discount of 5%"</p> : null}
// </div>
// //style dere hai dynamically component ko
//     );
//    }
 

function Product({title,idx})
{
   let oldPrices =["495","1,034","899","675"];;
   let newPrices=["399", "999", "799", "599"];
   let description=[["8,000 DPI", "5 programmable buttons"],["Intuitive Surface", "designed for best "],["Designed for ipad pro","must use once"],["wireless fast","powerful performance"]];
   return (
      <div className="Product" >
         <h4>{title}</h4>
         <p>{description[idx][0]}</p>
          <p>{description[idx][1]}</p>
         <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>

      </div>
   )
}

export default Product;