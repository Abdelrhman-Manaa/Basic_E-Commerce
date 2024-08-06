import { useEffect, useState } from "react";
import Product from "./product";

function ProductsList() {
    const Api_url = "https://fakestoreapi.com/products";
    const [products, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);

    const getProduct = () => {
        fetch(Api_url)
            .then(response => response.json())
            .then((data) => setProduct(data));
    }

    const getCategories = () => {
        fetch(`${Api_url}/categories`)
            .then(response => response.json())
            .then((data) => setCategories(data));
    }

    const getCategory = (catName) => {
        console.log(catName);
        fetch(`${Api_url}/category/${catName}`)
            .then(response => response.json())
            .then((data) => setProduct(data));
    }

    useEffect(() => {
        getProduct();
        getCategories();
    }, []);

    return (
        <>
            <h2 className="text-center">Products</h2>
            <div className="container">
                <div className="button-container">
                    {categories.map((cat) => {
                        return <button key={cat} onClick={() => {
                            getCategory(cat);
                        }} className="btn btn-info">{cat}</button>
                    })}
                </div>
                <div className="row">
                    {products.map((product) => {
                        return (
                            <div className="col-3" key={product.id}>
                                <Product product={product} showButton={true} />
                            </div>)
                    })}
                </div>
            </div>
        </>
    );
}

export default ProductsList;
