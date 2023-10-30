import "./App.css";
import { products } from "./mocks/products.json";
import { ProductsList } from "./components/productsList/ProductsList";
import { FilterBar } from "./components/FilterBar/FilterBar";
import { useContext } from "react";
import { FiltersCtx } from "./context/contexts";
import { Cart } from "./components/cart/Cart";
import { CartProvider } from "./context/CartProvider";

const filterBy = (filters, array) => {
  const { price, category } = filters;
  let all = true;
  if (category !== "all") all = false;
  return array.filter((item) => {
    const { price: itemPrice, category: itemcategory } = item;
    return itemPrice >= price && (all || itemcategory === category);
  });
};

function App() {
  const filters = useContext(FiltersCtx);
  const list = filterBy(filters, products);
  return (
    <>
      <CartProvider>
        <Cart />
        <h1 className="shopping-cart-title">Shopping cart 🛒 </h1>
        <FilterBar />
        <ProductsList products={list} />
      </CartProvider>
    </>
  );
}

export default App;
