import { CartIcon } from "../../assets/CartIcon";
import "./shopping-cart.css";
import { ShoppingCartctx } from "../../context/shoppingCartContext";
import { useContext } from "react";
import { TrashIcon } from "../../assets/TrashIcon";
import { MinusIcon } from "../../assets/MinusIcon";
import { PlusIcon } from "../../assets/PlusIcon";
import { ShoppingCartctxType } from "../../types/shoppingCartCtxType";

export function ShoppingCart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    deleteFromCart,
  } = useContext(ShoppingCartctx) as ShoppingCartctxType;

  return (
    <>
      <label htmlFor="cartCheckbox" className="labelCheckbox">
        <CartIcon />
      </label>
      <input type="checkbox" id="cartCheckbox" hidden />
      <div className="shoppingCart-container">
        <h2 className="shoppingCart-header">Shopping Cart</h2>
        {cart.map((product) => {
          return (
            <div className="shoppingCart-card" key={product.id + product.title}>
              <img
                className="shoppingCart-image"
                src={product.image}
                alt={product.title}
              />

              <div className="shoppingCart-info-container">
                <h3 className="shoppingCart-title">
                  {product.title.split(" ").slice(0, 2).join(" ")}
                </h3>
                <button
                  className="shoppingCart-deleteItem"
                  id="shoppingCart-deleteItem"
                  onClick={() => deleteFromCart(product.id)}
                >
                  <TrashIcon />
                  <span>borrar</span>
                </button>
              </div>
              <div className="shoppingCart-price-container">
                <p className="shoppingCart-price">{product.price + " $"}</p>
                <div className="shoppingCart-buttons-container">
                  <button
                    className="shoppingCart-button"
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    <MinusIcon />
                  </button>
                  <p className="shoppingCart-quantity">{product.quantity}</p>
                  <button
                    className="shoppingCart-button"
                    onClick={() => increaseQuantity(product.id)}
                  >
                    <PlusIcon />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <button onClick={clearCart} className="shoppingCart-clear">
          Limpiar Carrito
        </button>
      </div>
    </>
  );
}
