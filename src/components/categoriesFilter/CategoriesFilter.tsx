import { useContext } from "react";
import { Productsctx } from "../../context/productContext.tsx";

import "./CategoriesFilter.css";
import { ProductsctxType } from "../../types/productsCtxType.ts";

export function CategoriesFilter() {
  if (Productsctx === null) {
    throw new Error("hola");
  }
  const { categories, filterByCategory } = useContext(
    Productsctx,
  ) as ProductsctxType;
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    filterByCategory(category);
  };

  return (
    <div className="categorieFilter-container">
      <select
        onChange={handleChange}
        className="categorieFilter"
        name="Categories"
        id="Categories"
      >
        <option className="categorieFilter-option" defaultValue="All">
          All
        </option>
        {categories.map((category, idx) => {
          return (
            <option
              key={category + idx}
              className="categorieFilter-option"
              value={category}
            >
              {category}
            </option>
          );
        })}
      </select>
    </div>
  );
}
