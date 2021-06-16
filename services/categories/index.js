import axios from "axios";

export const getAllCategories = () =>
  axios.get("http://localhost:3001/categories");
