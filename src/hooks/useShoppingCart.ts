import { useEffect, useReducer } from "react";
import { shoppingCartReducer } from "../reducers/shoppingCartReducer";
import { getAccesToken } from "../token/accessToken";
import { ProductCart } from "../types/productCartType";

const SET__CART_URL = "http://localhost:3000/api/v1/cart/saveCart";
export function useShoppingCart() {
  const initialCartState: ProductCart[] = [];
  // if (localStorage.getItem("cart")) {
  //   // initialCartState = JSON.parse(localStorage.getItem("cart") as string);
  //   //
  //   const responce = fetch(GET_CART_URL, {
  //     method: "POST",
  //     headers: {
  //       Authorization: "Bearer " + getAccesToken(),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((cart) => localStorage.setItem("cart", JSON.stringify(cart)))
  //     .catch((error) => console.log(error));
  // } else {
  //   localStorage.setItem("cart", JSON.stringify(initialCartState));
  //   const responce = fetch(GET_CART_URL)
  //     .then((res) => res.json())
  //     .then((cart) => localStorage.setItem("cart", JSON.stringify(cart)))
  //     .catch((error) => console.log(error));
  // }

  const [cart, dispatch] = useReducer(shoppingCartReducer, initialCartState);
  useEffect(() => {
    // localStorage.setItem("cart", JSON.stringify(cart));
    if (cart.length !== 0) {
      console.log(cart);
      fetch(SET__CART_URL, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + getAccesToken(),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: cart,
        }),
      })
        .then((res) => console.log(res.ok))
        .catch((error) => console.log(error));
    }
  }, [cart]);

  const addToCart = ({ id, title, image, price }: ProductCart) => {
    dispatch({
      type: "addToCart",
      payload: { id, title, image, quantity: 1, price },
    });
  };
  const deleteFromCart = (productId: string) => {
    dispatch({ type: "deleteFromCart", payload: { id: productId } });
  };
  const increaseQuantity = (productId: string) => {
    dispatch({ type: "increaseQuantity", payload: { id: productId } });
  };

  const decreaseQuantity = (productId: string) => {
    dispatch({ type: "decreaseQuantity", payload: { id: productId } });
  };
  const clearCart = () => {
    // setCart([]);
    dispatch({ type: "clearCart", payload: null });
  };

  const setCart = (userCart: ProductCart[]) => {
    console.log("setCart");
    console.log(userCart);

    dispatch({ type: "setCart", payload: { cart: userCart } });
  };

  return {
    cart,
    addToCart,
    deleteFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    setCart,
  };
}
