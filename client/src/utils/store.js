import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsReducer,
  productReducer,
} from "../redux/reducers/productReducer";
import { cartReducer } from "../redux/reducers/cartReducer";
import { categoryReducer } from "../redux/reducers/categoryReducer";
import { userReducer } from "../redux/reducers/userReducer";
//
const reducer = combineReducers({
  products: productsReducer,
  currentProduct: productReducer,
  cart: cartReducer,
  categories: categoryReducer,
  user: userReducer,
});

const middleware = [thunk];
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
const initialState = { cart: { cartItems }, user: { token } };

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
