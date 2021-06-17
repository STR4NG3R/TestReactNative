import axios from "axios";
import { CONFIG } from "../../config"
export const getAllCategories = () =>
  axios.get(`http://${CONFIG.URL}:${CONFIG.PORT}/categories`);
