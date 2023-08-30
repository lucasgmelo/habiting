import axios from "axios";

export const baseURL = "http://localhost:80/";

const api = axios.create({
  baseURL: baseURL,
});

export const logout = () => {
  localStorage.removeItem("token");
};

api.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');

  if (request.headers) {
    request.headers.token = token ? token : '';
  }

  return request;
});

export default api;
