import { ProductType } from "../types/productsType.ts";
import { fetchedProductType } from "../types/fetchedProductType.tsx";

export function productAdapter(product: fetchedProductType): ProductType {
  const productData = {
    id: product.id,
    title: product.title,
    image: product.images[0],
    description: product.description,
    price: product.price,
    category: product.category.name,
  };
  return productData;
}
