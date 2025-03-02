import { useEffect, useRef, useState } from "react";
import { productAdapter } from "../adapters/productsAdapters.ts";
import { data, categories } from "../mocks/data.ts";
import { ProductType } from "../types/productsType.ts";

export function useProducts() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [price, setPrice] = useState<number>(0);
  const productList = useRef(
    data.slice(0, 40).map((product) => {
      const productData = productAdapter(product);

      return productData;
    }),
  );
  const categoryRef = useRef("All");

  // useEffect(() => {
  //   setProducts(productList.current);
  // }, []);

  useEffect(() => {
    if (categoryRef.current === "All") {
      setProducts(
        productList.current.filter(
          (product: ProductType) => Number(product.price) >= price,
        ),
      );
      return;
    }
    setProducts(
      productList.current.filter(
        (product: ProductType) =>
          product.category === categoryRef.current &&
          Number(product.price) >= price,
      ),
    );
  }, [price]);

  const filterByCategory = (category: string): void => {
    categoryRef.current = category;
    if (category === "All") {
      setProducts(productList.current);
      setPrice(0);
      return;
    }
    setProducts(
      productList.current.filter(
        (product: ProductType) =>
          product.category === category && Number(product.price) >= price,
      ),
    );
  };

  const filterByPrice = (price: number) => {
    setPrice(price);
  };

  return { products, categories, price, filterByCategory, filterByPrice };
}
