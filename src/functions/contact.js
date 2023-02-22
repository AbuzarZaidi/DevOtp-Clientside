import * as api from "../api/contact";
export const Createquery = async (query) => {
  try {
    const response = await api.Createquery(query);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};