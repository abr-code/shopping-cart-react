type ProductCart = {
  id: string;
  title: string;
  image: string;
  quantity: number;
  price: number;
};

function shoppingCartReducer(
  cartState: ProductCart[],
  action: { type: string; payload: ProductCart | string },
) {
  const { id, title, image, quantity, price } = action.payload as ProductCart;
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

      break;
    default:
      return currentState;
      break;
  }
}

export { shoppingCartReducer };
