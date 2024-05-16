import "./App.css";
import { useSelector } from "react-redux";
import Product from "./Components/Product";
import AddProduct from "./Components/AddProduct";
import Header from "./Components/Header";

function App() {
  const products = useSelector((state) => state.products.products);
  return (
    <div className="App">
      <Header />
      <AddProduct />
      <h1>products</h1>
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} details={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
