import { useReducer } from "react";
import { CartCtx } from "./contexts";

const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (state.some((item) => item.id === action.payload.id)) return state;
      const newState = [...state, { ...action.payload, quantity: 1 }];
      updateLocalStorage(newState);
      return newState;
    }
    case "ITEM_INCREMENT": {
      const id = action.payload;
      const productInCartIndex = state.findIndex((item) => item.id === id);
      const newState = [
        ...state.slice(0, productInCartIndex),
        {
          ...state[productInCartIndex],
          quantity: state[productInCartIndex].quantity + 1,
        },
        ...state.slice(productInCartIndex + 1),
      ];
      updateLocalStorage(newState);
      return newState;
    }
    case "ITEM_DECREMENT": {
      const id = action.payload;
      const productInCartIndex = state.findIndex((item) => item.id === id);
      if (state[productInCartIndex].quantity <= 1) return state;
      const newState = [
        ...state.slice(0, productInCartIndex),
        {
          ...state[productInCartIndex],
          quantity: state[productInCartIndex].quantity - 1,
        },
        ...state.slice(productInCartIndex + 1),
      ];
      updateLocalStorage(newState);
      return newState;
    }
    case "REMOVE_FROM_CART": {
      const id = action.payload;
      const newState = state.filter((item) => item.id != id);
      updateLocalStorage(newState);
      return newState;
    }
    case "CLEAR_CART": {
      updateLocalStorage([]);
      return [];
    }
    default:
      break;
  }
};

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

export function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(reducer, initialState);
  const addToCart = (item) => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };
  const itemIncrement = (item) => {
    cartDispatch({
      type: "ITEM_INCREMENT",
      payload: item,
    });
  };

  const itemDecrement = (item) => {
    cartDispatch({
      type: "ITEM_DECREMENT",
      payload: item,
    });
  };

  const removeItem = (id) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };
  const clearCart = () => {
    cartDispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <CartCtx.Provider
      value={{
        cartState,
        addToCart,
        itemIncrement,
        itemDecrement,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartCtx.Provider>
  );
}
