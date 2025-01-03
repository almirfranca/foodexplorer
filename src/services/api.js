import axios from "axios";

// baseURL local: "http://localhost:3333"
export const api = axios.create({
  baseURL: "https://api-foodexplorer-6buc.onrender.com",
  withCredentials: true,
});
