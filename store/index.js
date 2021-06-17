const { combineReducers, createStore } = require("redux");
import { categoriesReducer } from "../reducers/categories";
import { productReducer } from "../reducers/products";

const reducer = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
});

export const store = createStore(reducer);
