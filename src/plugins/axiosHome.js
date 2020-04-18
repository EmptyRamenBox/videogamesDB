import Axios from "axios";

const api = Axios.create({
  baseURL: process.env.VUE_APP_db_apiBaseUrl,
});

export const home = (today) =>
  api(`games?dates=2020-01-01,${today}&ordering=-added`);
