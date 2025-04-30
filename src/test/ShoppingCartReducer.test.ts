//@ts-nocheck
import { it, expect, describe } from "vitest";
import { shoppingCartReducer } from "../reducers/shoppingCartReducer.tsx"; // Replace with your actual file path

describe("shoppingCartReducer", () => {
  const initialState = [
    {
      id: "1",
      title: "Product 1",
      image: "image1.jpg",
      quantity: 1,
      price: 10,
    },
    {
      id: "2",
      title: "Product 2",
      image: "image2.jpg",
      quantity: 2,
      price: 20,
    },
  ];

  it('should add a product to the cart when action is "addToCart"', () => {
    const newProduct = {
      id: "3",
      title: "Product 3",
      image: "image3.jpg",
      quantity: 1,
      price: 30,
    };
    const action = { type: "addToCart", payload: newProduct };

    const result = shoppingCartReducer(initialState, action);

    expect(result).toEqual([...initialState, newProduct]);
  });

  it('should delete a product from the cart when action is "deleteFromCart"', () => {
    const action = { type: "deleteFromCart", payload: "1" }; // Delete product with id '1'

    const result = shoppingCartReducer(initialState, action);

    expect(result).toEqual([
      {
        id: "2",
        title: "Product 2",
        image: "image2.jpg",
        quantity: 2,
        price: 20,
      },
    ]);
  });

  it('should increase the quantity of a product when action is "increaseQuantity"', () => {
    const action = { type: "increaseQuantity", payload: "1" }; // Increase quantity of product with id '1'

    const result = shoppingCartReducer(initialState, action);

    expect(result).toEqual([
      {
        id: "1",
        title: "Product 1",
        image: "image1.jpg",
        quantity: 2,
        price: 10,
      },
      {
        id: "2",
        title: "Product 2",
        image: "image2.jpg",
        quantity: 2,
        price: 20,
      },
    ]);
  });

  it('should decrease the quantity of a product when action is "decreaseQuantity"', () => {
    const action = { type: "decreaseQuantity", payload: "2" }; // Decrease quantity of product with id '2'

    const result = shoppingCartReducer(initialState, action);

    expect(result).toEqual([
      {
        id: "1",
        title: "Product 1",
        image: "image1.jpg",
        quantity: 1,
        price: 10,
      },
      {
        id: "2",
        title: "Product 2",
        image: "image2.jpg",
        quantity: 1,
        price: 20,
      },
    ]);
  });

  it('should not decrease quantity below 1 when action is "decreaseQuantity" and quantity is 1', () => {
    const action = { type: "decreaseQuantity", payload: "1" }; // Try to decrease quantity of product with id '1'

    const result = shoppingCartReducer(initialState, action);

    expect(result).toEqual([
      {
        id: "1",
        title: "Product 1",
        image: "image1.jpg",
        quantity: 1,
        price: 10,
      },
      {
        id: "2",
        title: "Product 2",
        image: "image2.jpg",
        quantity: 2,
        price: 20,
      },
    ]);
  });

  it('should clear the cart when action is "clearCart"', () => {
    const action = { type: "clearCart", payload: "" }; // No payload needed for clearing

    const result = shoppingCartReducer(initialState, action);

    expect(result).toEqual([]);
  });

  it("should return the current state when action type is unknown", () => {
    const action = { type: "unknownAction", payload: "" };

    const result = shoppingCartReducer(initialState, action);

    expect(result).toEqual(initialState);
  });
});
