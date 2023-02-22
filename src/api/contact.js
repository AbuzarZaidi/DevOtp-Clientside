import axios from "axios";
const url = "http://localhost:5000";
export const Createquery = (query) => axios.post(`${url}/contact-us/createQuery`, query);

