import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
} from "../actions/types";
export const categoryReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { loading: true, categories: [] };
    case GET_CATEGORIES_SUCCESS:
      return { loading: false, categories: action.payload };
    case GET_CATEGORIES:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
