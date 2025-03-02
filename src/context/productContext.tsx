import { useProducts } from "../hooks/useProducts";
import { createContext, ReactNode } from "react";
import { ProductsctxType } from "../types/productsCtxType";

export const Productsctx = createContext<ProductsctxType | null>(null);

export function ProductContext({ children }: { children: ReactNode }) {
  const {
    products,
    categories,
    filterByCategory,
    filterByPrice,
    price,
  }: ProductsctxType = useProducts();
  return (
    <Productsctx.Provider
      value={{ products, categories, filterByCategory, filterByPrice, price }}
    >
      {children}
    </Productsctx.Provider>
  );
}
