import { useEffect, useState } from "react";
import Product from "./product";

function ProductsList() {
    const Api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getProducts = () => {
        fetch(Api_url)
            .then(response => response.json())
            .then(data => setProducts(data));
    };

    const getCategories = () => {
        fetch(`${Api_url}/categories`)
            .then(response => response.json())
            .then(data => setCategories(data));
    };

    const getCategoryProducts = (catName) => {
        fetch(`${Api_url}/category/${catName}`)
            .then(response => response.json())
            .then(data => setProducts(data));
    };

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    return (
        <>
            <h2 className="text-center">Products</h2>
            <div className="container">
                <button className="btn btn-info" onClick={
                    () => {
                        getProducts();
                    }}
                >All</button>
                {categories.map((cat) => {
                    return (
                        <button
                            key={cat}
                            onClick={() => {
                                getCategoryProducts(cat);
                            }}
                            className="btn btn-info"
                        >
                            {cat}
                        </button>
                    );
                })}
                <div className="row">
                    {products.map((product) => {
                        return (
                            <div className="col-3" key={product.id}>
                                <Product product={product} showButton={true} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default ProductsList;
