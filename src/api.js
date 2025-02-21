import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Backend URL
});

// Automatically add token to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token"); // Get token from storage
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
