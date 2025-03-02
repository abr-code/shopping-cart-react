import "./ProductList.css";
import { ProductCard } from "../productCard/ProductCard.js";
import { ProductType } from "../../types/productsType.ts";
import { useContext } from "react";
import { Productsctx } from "../../context/productContext.tsx";
import { ProductsctxType } from "../../types/productsCtxType.ts";

export function ProductList() {
  const { products } = useContext(Productsctx) as ProductsctxType;
  return (
    <>
      <div className="product-card-container">
        {products.map((product: ProductType) => {
          return (
            <ProductCard key={product.id + product.title} product={product} />
          );
        })}
      </div>
    </>
  );
}
