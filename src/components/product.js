function Product (props){
    const {product} = props;
    console.log(props);
    return(
        <>
        <div className="card" >
                    <img src={product.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <h6 className="card-price" align="center">${product.price}</h6>
                        <button href="#/" className="btn btn-primary" >Details</button>
                    </div>
                    </div>
        </>
    )
}
export default Product;