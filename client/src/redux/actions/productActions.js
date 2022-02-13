import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_ONE_PRODUCT,
  GET_ONE_PRODUCT_FAIL,
  GET_ONE_PRODUCT_SUCCESS,
} from "./types";
import axios from "axios";

export const getProducts = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS });
    const url = id != 0 ? `/api/categories/${id}/products` : `/api/products`;
    const { data } = await axios.get(url);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    const err = error?.response?.data?.message;
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: err || error.message,
    });
  }
};
export const getProductById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ONE_PRODUCT });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: GET_ONE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    const err = error?.response?.data?.message;
    dispatch({
      type: GET_ONE_PRODUCT_FAIL,
      payload: err || error.message,
    });
  }
};
