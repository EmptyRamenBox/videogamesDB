import Axios from "axios";

const api = Axios.create({
  baseURL: process.env.VUE_APP_db_apiBaseUrl,
});

export const search = (searchItem) => api(`games?search==${searchItem}`);
