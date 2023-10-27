import "./App.css";
import { products } from "./mocks/products.json";
import { ProductsList } from "./components/productsList/ProductsList";
import { FilterBar } from "./components/FilterBar/FilterBar";
import { useContext } from "react";
import { FiltersCtx } from "./context/contexts";

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
  const { price } = filters;
  const list = filterBy(filters, products);
  return (
    <>
      <h1 className="shopping-cart-title">Shopping cart 🛒 {price}</h1>
      <FilterBar />
      <ProductsList products={list} />
    </>
  );
}

export default App;
