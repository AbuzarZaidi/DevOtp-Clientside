import * as api from "../api/auth";
export const signup = async (user) => {
  try {
    const response = await api.signup(user);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const signin = async (user) => {
  try {
    const response = await api.signin(user);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
