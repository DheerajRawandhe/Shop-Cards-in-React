import "./Product.css";
import Price from "./Price.jsx";

function Product({title,  idx }) {
    let oldPrice = ["12,499", "9,299" , "7,399" , "6,599"];
    let newPrice = ["8,999", "5,899" , "4,290" , "3,569"];
    let description =[ ["8,000 DPI" , "5 Programable buttons" ],
                    [ "Intutive surface" , "Designed for iPad Pro" ] ,
                    [ "Designed for iPad Pro" , "Prointutive surface" ] ,
                    [ "Wireless", "optical orientation"] ];
    return ( 
        <>
        <div className="Product">
        <h4>{title} </h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
          
        </div>
        </>
    )
}

export default Product;