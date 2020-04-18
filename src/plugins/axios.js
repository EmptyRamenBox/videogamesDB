/* eslint-disable prettier/prettier */
import Vue from "vue";
import axios from "axios";

// axios.defaults
// Specify global default values that will be applied to every request
axios.defaults.baseURL = process.env.VUE_APP_db_apiBaseUrl;

// Garbage:
// JS when using IGDB database
// axios.defaults.headers.common["user-key"] = process.env.VUE_APP_API_userKey;
// axios.defaults.headers.common["User-Agent"] = "gamesDB";

Vue.prototype.$axios = axios;
