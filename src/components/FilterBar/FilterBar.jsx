import "./filterBar.css";
import { useId } from "react";
import { useContext } from "react";
import { FiltersCtx } from "../../context/contexts";
import { FilterDispatchCtx } from "../../context/contexts";

export function FilterBar() {
  const categorieId = useId();
  const priceId = useId();
  const filters = useContext(FiltersCtx);
  const filtersDispatch = useContext(FilterDispatchCtx);
  const { price } = filters;

  const priceHandler = (event) => {
    filtersDispatch({
      type: "UPDATE_PRICE",
      payload: event.target.value,
    });
  };

  const categoreHandler = (event) => {
    filtersDispatch({
      type: "UPDATE_CATEGORY",
      payload: event.target.value,
    });
  };
  return (
    <div className="filterbar-container">
      <div className="price-filter">
        <label htmlFor={priceId}>Price</label>
        <input
          id={priceId}
          type="range"
          value={price}
          onChange={priceHandler}
        />
        <span>{price}</span>
      </div>
      <div>
        <label htmlFor={categorieId}>Categorie</label>
        <select id={categorieId} name="cars" onChange={categoreHandler}>
          <option value="all">all</option>
          <option value="fragrances">fragrances</option>
          <option value="laptops">laptops</option>
        </select>
      </div>
    </div>
  );
}
