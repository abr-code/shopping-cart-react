import { useEffect, useReducer } from "react";
import { shoppingCartReducer } from "../reducers/shoppingCartReducer";
import { ProductCart } from "../types/productCartType";

export function useShoppingCart() {
  let initialCartState: ProductCart[] = [];
  if (localStorage.getItem("cart")) {
    initialCartState = JSON.parse(localStorage.getItem("cart") as string);
  } else {
    localStorage.setItem("cart", JSON.stringify(initialCartState));
  }

  const [cart, dispatch] = useReducer(shoppingCartReducer, initialCartState);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = ({ id, title, image, price }: ProductCart) => {
    dispatch({
      type: "addToCart",
      payload: { id, title, image, quantity: 1, price },
    });
  };
  const deleteFromCart = (productId: string) => {
    dispatch({ type: "deleteFromCart", payload: productId });
  };
  const increaseQuantity = (productId: string) => {
    dispatch({ type: "increaseQuantity", payload: productId });
  };

  const decreaseQuantity = (productId: string) => {
    dispatch({ type: "decreaseQuantity", payload: productId });
  };
  const clearCart = () => {
    // setCart([]);
    dispatch({ type: "clearCart", payload: "" });
  };
  return {
    cart,
    addToCart,
    deleteFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  };
}
