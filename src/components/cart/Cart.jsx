import { useId } from "react";
import { ClearCartIcon, CartIcon } from "../Icons";
import "./Cart.css";
import { CartCtx } from "../../context/contexts";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const { itemIncrement, cartState, itemDecrement, removeItem } =
    useContext(CartCtx);
  const { id } = item;
  const product = cartState.find((item) => item.id === id);
  const { images, quantity } = product;
  const incrementHandler = () => {
    itemIncrement(id);
  };
  const decrementHandler = () => {
    itemDecrement(id);
  };
  const removeItemHandler = () => {
    removeItem(id);
  };

  return (
    <li>
      <div className="cart-item">
        <img className="cart-item_img" src={images[0]} alt="" />
        <div className="cart-item_quantity">
          <button onClick={incrementHandler}>+</button>
          <span>{quantity}</span>
          <button onClick={decrementHandler}>-</button>

          <button onClick={removeItemHandler}>🗑</button>
        </div>
      </div>
    </li>
  );
};

export function Cart() {
  const cartId = useId();
  const { cartState, clearCart } = useContext(CartCtx);
  const clearCartHandler = () => {
    clearCart();
  };
  return (
    <>
      <label className="cart-button" htmlFor={cartId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartId} hidden />

      <aside className="cart">
        <div className="cart_clear-cart" onClick={clearCartHandler}>
          <ClearCartIcon />
        </div>
        <ul className="cart_item-list">
          {cartState.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </ul>
      </aside>
    </>
  );
}
