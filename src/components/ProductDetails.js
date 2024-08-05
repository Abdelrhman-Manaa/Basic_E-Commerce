import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./product";

function  ProductDetails(){
    const api_url = "https://fakestoreapi.com/products"
    const params = useParams();
    const [product, setProduct] = useState({});
    useEffect (() =>{
        fetch(`${api_url}/${params.productId}`)
       .then(res => res.json())
       .then((product)=>(setProduct(product)));
    },[]);
    console.log(<Product/>);
    return(
        <>
        <h2 className="text-center"> Product Details </h2>  
        <Product product={product} showButton={false}/> 
        </>
    )
 
}
export default ProductDetails;