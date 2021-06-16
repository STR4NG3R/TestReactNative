import axios from "axios"

export const getALl = async () => {
  const res = axios.get('http://localhost:3001/notes')
  return res.data
}

