import { createContext, ReactNode } from "react";

import { useShoppingCart } from "../hooks/useShoppingCart";

import { ShoppingCartctxType } from "../types/shoppingCartCtxType";

export const ShoppingCartctx = createContext<ShoppingCartctxType | null>(null);

export function ShoppingCartContext({ children }: { children: ReactNode }) {
  const {
    cart,
    addToCart,
    deleteFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useShoppingCart();

  return (
    <ShoppingCartctx.Provider
      value={{
        cart,
        addToCart,
        deleteFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartctx.Provider>
  );
}
