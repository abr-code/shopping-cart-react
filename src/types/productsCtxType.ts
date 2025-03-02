import { ProductType } from "./productsType.ts";

export type ProductsctxType = {
  products: ProductType[];
  categories: string[];
  filterByCategory(category: string): void;
  filterByPrice(price: number): void;
  price: number;
};
