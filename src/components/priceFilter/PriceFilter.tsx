import { useContext } from "react";
import "./PriceFilter.css";
import { Productsctx } from "../../context/productContext";
import { ProductsctxType } from "../../types/productsCtxType";

export function PriceFilter() {
  const { filterByPrice, price } = useContext(Productsctx) as ProductsctxType;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPrice = Number(e.target.value);
    filterByPrice(inputPrice);
  };
  return (
    <div className="priceFilter-container">
      <input
        onChange={handleChange}
        className="priceFilter"
        type="range"
        id="priceFilter"
        value={price}
      />
      <label className="priceFilter-label" htmlFor="priceFilter">
        {price}
      </label>
    </div>
  );
}
