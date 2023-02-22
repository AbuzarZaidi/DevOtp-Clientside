import axios from "axios";
const url = "http://localhost:5000";
export const signup = (user) => axios.post(`${url}/users/signup`, user);
export const signin = (user) => axios.post(`${url}/users/signin`, user);
