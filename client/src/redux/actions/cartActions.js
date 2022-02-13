import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";
import axios from "axios";

export const addToCart = (_id, quantity) => async (dispatch, getState) => {
  try {
    const items = getState().cart.cartItems;
    const isExist = items.find((item) => item._id == _id);
    if (isExist) {
      const newItem = { ...isExist, quantity };
      const newitems = items.map((i) => (i._id == isExist._id ? newItem : i));
      dispatch({ type: ADD_TO_CART, payload: [...newitems] });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
      return;
    }
    const { data } = await axios.get(`/api/products/${_id}`);
    if (data.inStock >= quantity) {
      const item = { ...data, quantity };
      dispatch({ type: ADD_TO_CART, payload: [...items, item] });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
    }
  } catch (error) {}
};
export const removeFromCart = (_id) => async (dispatch, getState) => {
  let items = getState().cart.cartItems;
  items = items.filter((item) => item._id !== _id);
  dispatch({ type: REMOVE_FROM_CART, payload: items });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
