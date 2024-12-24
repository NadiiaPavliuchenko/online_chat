import axios from "axios";

const api = axios.create({
  // baseURL: "https://chat-backend-0hoy.onrender.com/api",
  baseURL: "http://localhost:8080/api",
});

export default api;
