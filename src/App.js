import Navebar from "./components/navbar";
import Slider from "./components/slider";
import ProductsList from "./components/productsList";
import About from "./components/about";
import ProductDetails from "./components/ProductDetails"; // add this component later this component later
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navebar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
