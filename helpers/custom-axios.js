import axios from "axios";

export const axiosNoAuth = axios.create({
  baseURL: process.env.API_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosAuth = axios.create({
  baseURL: process.env.API_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer"
  },
});

