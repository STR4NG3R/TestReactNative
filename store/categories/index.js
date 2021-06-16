import { createStore } from "redux";
import { categoriesReducer } from "../../reducers/categories";
export const storeCategories = () => (store = createStore(categoriesReducer));
