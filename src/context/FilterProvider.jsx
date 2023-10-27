import { FiltersCtx } from "./contexts";
import { FilterDispatchCtx } from "./contexts";
import { useFilter } from "../hooks/useFilter";
export function FilterProvider({ children }) {
  const { filters, filtersDispatch } = useFilter();

  return (
    <FiltersCtx.Provider value={filters}>
      <FilterDispatchCtx.Provider value={filtersDispatch}>
        {children}
      </FilterDispatchCtx.Provider>
    </FiltersCtx.Provider>
  );
}
