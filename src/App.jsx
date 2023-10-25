import "./App.css";
import { products } from "./mocks/products.json";
import { ProductsList } from "./components/productsList/ProductsList";

function App() {
  return (
    <>
      <h1 className="shopping-cart-title">Shopping cart 🛒</h1>
      <ProductsList products={products} />
    </>
  );
}

export default App;
