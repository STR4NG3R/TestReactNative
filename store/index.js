const { combineReducers, createStore } = require("redux");
import { categoriesReducer } from "../reducers/categories";
import { productReducer } from "../reducers/products";
import { basketReducer } from "../reducers/basket";
import { userReducer } from "../reducers/user";

const reducer = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  user: userReducer,
  basket: basketReducer,
});

export const store = createStore(reducer);
