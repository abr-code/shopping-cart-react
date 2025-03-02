import { ProductCart } from "./productCartType";

// interface addToCartType {
//    Omit<ProductCart, "quantity">
// }
type addToCartType = Omit<ProductCart, "quantity">;

export interface ShoppingCartctxType {
  cart: ProductCart[];
  addToCart(product: addToCartType): void;
  deleteFromCart(productId: string): void;
  increaseQuantity(productId: string): void;
  decreaseQuantity(productId: string): void;
  clearCart(): void;
}
