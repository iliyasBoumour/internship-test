import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: action.payload };
    case REMOVE_FROM_CART:
      return { cartItems: action.payload };
    default:
      return state;
  }
};
