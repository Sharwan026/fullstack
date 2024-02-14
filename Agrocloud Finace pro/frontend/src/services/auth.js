import axios from "axios";

const api_url = "http://localhost:8181";

export const signIn = (data) => axios.post(`${api_url}/api/v1/auth/login`, data);
xport const signUp = (data) => axios.post(`${api_url}/api/v1/auth/signup`, data);