import { useEffect, useState } from "react";
import Product from "./product";
function ProductsList(){
    const Api_url = "https://fakestoreapi.com/products";
    const [products, setProduct] = useState([]) ;
    useEffect(()=>{
        fetch(Api_url)
       .then(response => response.json())
       .then((data)=>setProduct(data))
    },[]);
    return (
        <>
        <h2 className="text-center">  Products </h2>
        <div className="container">
            <div className="row">
                {products.map((product) =>{
                return (
                <div className="col-3" key={product.id}>
                    <Product product={product}/> 
                </div>)
                })}
            </div>
        </div>
        </>
    );
}
export default ProductsList;