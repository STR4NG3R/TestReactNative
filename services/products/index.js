import axios from "axios";

export const getALl = () => axios.get("http://localhost:3001/products");
