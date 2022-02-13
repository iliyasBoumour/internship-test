import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_ONE_PRODUCT,
  GET_ONE_PRODUCT_FAIL,
  GET_ONE_PRODUCT_SUCCESS,
} from "../actions/types";

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { loading: true, products: [] };
    case GET_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };
    case GET_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const productReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case GET_ONE_PRODUCT:
      return { loading: true, product: {} };
    case GET_ONE_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };
    case GET_ONE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
