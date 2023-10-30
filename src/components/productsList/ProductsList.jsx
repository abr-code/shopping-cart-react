import { AddToCartIcon } from "../Icons";
import "./productsList.css";
import { CartCtx } from "../../context/contexts";
import { useContext } from "react";
import { useState } from "react";

function Product({ item }) {
  const { addToCart } = useContext(CartCtx);
  const { id, title, images, price } = item;

  const addToCartHandler = (item) => {
    addToCart(item);
  };

  return (
    <div className="product-list" key={id}>
      <h2 className="product-list_title">{title}</h2>
      <img className="product-list_img" src={images[0]} alt={title} />
      <p>${price}</p>
      <div
        className="product-list_addToCart"
        onClick={() => {
          addToCartHandler({ id, title, images, price });
        }}
      >
        <AddToCartIcon />
      </div>
    </div>
  );
}

export function ProductsList({ products }) {
  return (
    <div className="products-list-container">
      {products.slice(0, 10).map((item) => {
        return <Product key={item.id} item={item} />;
      })}
    </div>
  );
}
