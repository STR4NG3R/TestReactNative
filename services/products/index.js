import axios from "axios";

export const getALlProducts = () => axios.get("http://localhost:3001/products");
