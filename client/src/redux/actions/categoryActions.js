import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
} from "./types";
import axios from "axios";
export const getCategories = (limit) => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORIES });
    const { data } = await axios.get(`/api/categories?limit=${limit}`);
    dispatch({ type: GET_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    const err = error?.response?.data?.message;
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: err || error.message,
    });
  }
};
