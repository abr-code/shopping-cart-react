import "./ProductCard.css";
import { ShoppingCartctx } from "../../context/shoppingCartContext.tsx";
import { useContext } from "react";
import { AddToCartIcon } from "../../assets/AddToCartIcon.tsx";
import { DeleteFromCartIcon } from "../../assets/DeleteFromCartIcon.tsx";
import { ProductType } from "../../types/productsType.ts";
import { ShoppingCartctxType } from "../../types/shoppingCartCtxType.ts";

interface ProductCardProps {
  product: ProductType;
}

export function ProductCard({ product }: ProductCardProps) {
  const { title, description, image, price, id: idNumber } = product;
  const id = String(idNumber);

  const { cart, addToCart, deleteFromCart } = useContext(
    ShoppingCartctx,
  ) as ShoppingCartctxType;

  const isInCart = cart.some((item) => item.id === id);

  const addProduct = () => {
    addToCart({ id, title, image, price });
  };
  const deleteProdut = () => {
    deleteFromCart(id);
  };
  return (
    <div className="productCard">
      <img
        className="productCard-image"
        src={image}
        alt={`${title} image`}
        width={300}
        height={400}
      />
      <h3 className="productCard-title">{title}</h3>
      <p className="productCard-description">
        {description.substring(0, description.search(/\.|,/))}
      </p>

      <h3 className="productCard-price">{price + "$"}</h3>
      {isInCart ? (
        <button onClick={deleteProdut}>
          <div className="productCard-buttonDelete productCard-button">
            <DeleteFromCartIcon />
          </div>
        </button>
      ) : (
        <button onClick={addProduct}>
          <div className="productCard-buttonAdd productCard-button">
            <AddToCartIcon />
          </div>
        </button>
      )}

      {/* <footer>{category}</footer> */}
    </div>
  );
}
