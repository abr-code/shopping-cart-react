import "./App.css";
import { ProductList } from "./components/productList/ProductList";
import { CategoriesFilter } from "./components/categoriesFilter/CategoriesFilter.js";
import { PriceFilter } from "./components/priceFilter/PriceFilter.js";
import { ShoppingCart } from "./components/shopping-cart/shopping-cart.js";
import { ShoppingCartContext } from "./context/shoppingCartContext.js";

function App() {
  return (
    <>
      <header>
        <h1 className="header-title">Products</h1>
        <CategoriesFilter />
        <PriceFilter />
      </header>
      <main>
        <ShoppingCartContext>
          {/* shopping cart is absolute so can be posision anyware in the layout */}
          <ShoppingCart />
          <ProductList />
        </ShoppingCartContext>
      </main>
    </>
  );
}

export default App;
