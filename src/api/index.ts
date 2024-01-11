import axios from "axios";

const API_URL = "http://10.150.150.179:8080/api";

export const instance = axios.create({
  baseURL: API_URL,
});
