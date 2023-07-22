import axios from "axios";

export const baseURL = "https://6894-177-221-36-161.ngrok.io/";

const api = axios.create({
  baseURL: baseURL,
});

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
};

// api.interceptors.request.use((request) => {
//   const token = localStorage.getItem('idToken');
//   const workspace = localStorage.getItem('workspace');

//   if (request.headers) {
//     request.headers.Authorization = token ? `Bearer ${token}` : '';
//     request.headers.workspace = workspace || '';
//   }

//   return request;
// });

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response.status === 401) {
//       renderMessageError();
//     }
//     if (error.response.status === 403) {
//       return logout();
//     }
//     throw error;
//   },
// );

export default api;
