const { combineReducers, createStore } = require("redux");
import { useReducer } from "react";
import { categoriesReducer } from "../reducers/categories";
import { productReducer } from "../reducers/products";
import { basketReducer } from "../reducers/basket";

const reducer = combineReducers({
  categories: categoriesReducer,
  products: productReducer,
  user: useReducer,
  basket: basketReducer,
});

export const store = createStore(reducer);
