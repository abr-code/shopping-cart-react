type ProductCart = {
  id: string;
  title: string;
  image: string;
  quantity: number;
  price: number;
};

type ActionType = {
  type:
    | "addToCart"
    | "deleteFromCart"
    | "increaseQuantity"
    | "decreaseQuantity"
    | "clearCart"
    | "setCart";
  payload: ProductCart | string | ProductCart[];
};

function shoppingCartReducer(
  cartState: ProductCart[],
  action: ActionType,
): ProductCart[] {
  const { id, title, image, quantity, price } = action.payload as ProductCart;

  //used a  copy beacuse of using the cartState lead to inconsistency
  //even withot modifying it
  const currentState = structuredClone(cartState);
  let newState = [];
  switch (action.type) {
    case "addToCart":
      newState = [...currentState, { id, title, image, quantity, price }];
      return newState;
      break;
    case "deleteFromCart":
      newState = currentState.filter((item) => item.id !== action.payload);
      return newState;
      break;
    case "increaseQuantity":
      newState = currentState.map((product) => {
        if (product.id === action.payload) product.quantity++;
        return product;
      });

      return newState;

      break;
    case "decreaseQuantity":
      newState = currentState.map((product) => {
        if (product.id === action.payload && product.quantity > 1)
          product.quantity--;
        return product;
      });
      return newState;
      break;
    case "clearCart":
      return [];
    case "setCart":
      if (
        typeof action.payload === "string" ||
        !Array.isArray(action.payload)
      ) {
        return currentState;
      }
      console.log("reducer setCart");
      console.log(action.payload);
      return action.payload;
      break;
    default:
      return currentState;
      break;
  }
}

export { shoppingCartReducer };
