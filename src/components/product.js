import { Link } from "react-router-dom";
import "./product.css";
function Product(props) {
  const { product, showButton } = props;
  console.log(props);
  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <h6 className="card-price" align="center">
            ${product.price}
          </h6>
          {showButton && (
            <Link className="btn btn-primary" to={`/product/${product.id}`}>
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default Product;
