type ProductCart = {
  id: string;
  title: string;
  image: string;
  quantity: number;
  price: number;
};

type ProductCartId = Pick<ProductCart, "id">;
type ActionType =
  | { type: "addToCart"; payload: ProductCart }
  | { type: "deleteFromCart"; payload: ProductCartId }
  | { type: "increaseQuantity"; payload: ProductCartId }
  | { type: "decreaseQuantity"; payload: ProductCartId }
  | { type: "clearCart"; payload: null }
  | { type: "setCart"; payload: { cart: ProductCart[] } };

function shoppingCartReducer(
  cartState: ProductCart[],
  action: ActionType,
): ProductCart[] {
  //used a  copy beacuse of using the cartState lead to inconsistency
  //even withot modifying it
  const currentState = structuredClone(cartState);
  let newState = [];
  // if there is no payload and is not clearCart
  if (action.type !== "clearCart" && !action.payload) return cartState;

  switch (action.type) {
    case "addToCart":
      return [...currentState, action.payload];
    case "deleteFromCart":
      return currentState.filter((item) => item.id !== action.payload.id);
    case "increaseQuantity":
      return currentState.map((product) => {
        if (product.id === action.payload.id) product.quantity++;
        return product;
      });

    case "decreaseQuantity":
      newState = currentState.map((product) => {
        if (product.id === action.payload.id && product.quantity > 1)
          product.quantity--;
        return product;
      });
      return newState;
    case "clearCart":
      return [];
    case "setCart":
      return action.payload.cart;
    default:
      return currentState;
  }
}

export { shoppingCartReducer };
