import "./Product.css";
import Price from "./Price";
function Product({title,idx}){
    let oldPrices=["12,455","1,599","2,999","7,888"];
    let newPrices=["11,455","599","999","3,888"];
    let description=[["8,000 DPI","5 Programmable Button"],["intuitive surface","designed for apple"],["designed for apple","intuitive surface"],["wireless","New version 5"]];

  return(
        <div className="Product" > 
         <h4>{title}</h4>
          <p>{description[idx][0]}</p>
           <p>{description[idx][1]}</p>
          <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
    
    

}
export default Product;