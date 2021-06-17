import axios from "axios";
import { CONFIG } from "../../config";
export const getAllProducts = () =>
  axios.get(`http://${CONFIG.URL}:${CONFIG.PORT}/products`);
