import axios from "axios";

const api = axios.create({
  baseURL: "https://chat-backend-0hoy.onrender.com/api",
});

export default api;
