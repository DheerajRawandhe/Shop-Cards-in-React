import Product from "./Product.jsx";

function ProductTab() {
    return (
        <>
    <div className="Product-amazon">
        <Product title="Logitech MX Master" idx={0} />      
        <Product  title="Apple Pencil" idx={1}/>
        <Product title="ZebronicsZen-trasformer" idx={2}/>  
        <Product title="Petronics Toad" idx={3}/>  
    </div>
    </>
    )
}
 
export default ProductTab;