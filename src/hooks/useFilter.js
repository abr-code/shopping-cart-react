import { useReducer } from "react";

function filterReducer(filter, action) {
  switch (action.type) {
    case "UPDATE_PRICE": {
      return {
        ...filter,
        price: action.payload,
      };
    }
    case "UPDATE_CATEGORY": {
      return {
        ...filter,
        category: action.payload,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function useFilter() {
  const initialState = { price: 0, category: "all" };
  const [filters, filtersDispatch] = useReducer(filterReducer, initialState);
  return { filters, filtersDispatch };
}
