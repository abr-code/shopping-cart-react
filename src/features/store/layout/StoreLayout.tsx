import { CategoriesFilter } from "../../../components/categoriesFilter/CategoriesFilter";
import { PriceFilter } from "../../../components/priceFilter/PriceFilter";
import { ProductList } from "../../../components/productList/ProductList";
import { ShoppingCart } from "../../../components/shopping-cart/shopping-cart";

function StoreLayout() {
  return (
    <>
      <header>
        <h1 className="header-title">Products</h1>
        <CategoriesFilter />
        <PriceFilter />
      </header>
      <main>
        {/* shopping cart is absolute so can be posision anyware in the layout */}
        <ShoppingCart />
        <ProductList />
      </main>
    </>
  );
}

export { StoreLayout };
