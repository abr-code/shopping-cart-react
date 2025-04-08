import { test, expect, describe } from "vitest";
import { shoppingCartReducer } from "../reducers/shoppingCartReducer.tsx"; // Replace with your actual file path

describe("Negative Space Tests for shoppingCartReducer", () => {
  // 3. Test: Unknown action type
  test("should return current state for an invalid action type", () => {
    const initialState = [];
    const action = { type: "invalidAction", payload: null };

    const result = shoppingCartReducer(initialState, action);

    expect(result).toEqual(initialState); // Should return current state without modification
  });

  // 5. Test: Missing id in "deleteFromCart"
  test('should return current state when id is missing in "deleteFromCart"', () => {
    const initialState = [
      {
        id: "1",
        title: "Product 1",
        image: "image.jpg",
        quantity: 1,
        price: 10,
      },
    ];
    const invalidAction = { type: "deleteFromCart", payload: {} }; // Missing id

    const result = shoppingCartReducer(initialState, invalidAction);

    expect(result).toEqual(initialState); // Should not delete anything, return the current state
  });

  // 6. Test: Null payload in "addToCart"
  test('should return current state when payload is null in "addToCart"', () => {
    const initialState = [];
    const nullPayloadAction = { type: "addToCart", payload: null };

    const result = shoppingCartReducer(initialState, nullPayloadAction);

    expect(result).toEqual(initialState); // Should not modify the state
  });

  // 7. Test: Null payload in "setCart"
  test('should return current state when payload is null in "setCart"', () => {
    const initialState = [];
    const nullPayloadAction = { type: "setCart", payload: null };

    const result = shoppingCartReducer(initialState, nullPayloadAction);

    expect(result).toEqual(initialState); // Should return the current state without modification
  });

  // 8. Test: Decrease quantity below 1 (should not decrease below 1)
  test('should not decrease quantity below 1 in "decreaseQuantity"', () => {
    const initialState = [
      {
        id: "1",
        title: "Product 1",
        image: "image.jpg",
        quantity: 1,
        price: 10,
      },
    ];
    const action = { type: "decreaseQuantity", payload: { id: "1" } };

    const result = shoppingCartReducer(initialState, action);

    expect(result[0].quantity).toBe(1); // Quantity should stay at 1, not go below
  });

  // 9. Test: Empty cart with "deleteFromCart"
  test("should return the same state when deleting from an empty cart", () => {
    const initialState = [];
    const action = { type: "deleteFromCart", payload: { id: "1" } }; // No product to delete

    const result = shoppingCartReducer(initialState, action);

    expect(result).toEqual(initialState); // Should return the same empty cart
  });

  // 10. Test: Clear an already empty cart
  test("should return an empty cart when clearCart is called on an empty cart", () => {
    const initialState = [];
    const action = { type: "clearCart", payload: null };

    const result = shoppingCartReducer(initialState, action);

    expect(result).toEqual([]); // Cart should remain empty
  });
});
