import { createStore } from "redux";
import { productReducer } from "../../reducers/products";
export const storeProducts = () => (store = createStore(productReducer));
