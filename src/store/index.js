import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { search } from "../plugins/axiosSearch.js";
import { home } from "../plugins/axiosHome.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    user: " ",
    searchItem: "",
    notFound: false,
    games: [],
  },
  getters: {
    // getDrawer returns the state of the drawer
    getDrawer: (state) => state.drawer,
    getUser: (state) => state.user,
    getSearch: (state) => state.searchItem,
    getNotFound: (state) => state.notFound,
    // getGames returns the search results for games
    getGames: (state) => state.games,
    getHomeGames: (state) => state.games,
    // the following returns data for the Game view
    getGame: (state) => (id) => state.games.find((game) => game.id === id),
  },

  mutations: {
    // Drawer mutations
    changeDrawer: (state, status) => (state.drawer = status),
    settingUser: (state, user) => (state.user = user),
    // Search Page mutations
    settingNewSearch: (state, searchItem) => (state.searchItem = searchItem),
    settingNotFound: (state, foundStat) => (state.notFound = foundStat),
    // Games
    settingGames: (state, games) => (state.games = games),
  },
  actions: {
    // Games actions (Global)
    // The following section contains actions that handle
    // the "games" st ate. This is the only action that manipulates games.
    setGames: ({ commit }, data) => commit("settingGames", data),
    // Drawer actions
    // Contain parameters to modify the state of the drawer
    hideDrawer: ({ commit }) => commit("changeDrawer", false),
    showDrawer: ({ commit }) => commit("changeDrawer", true),
    setUser: ({ commit }, user) => commit("settingUser", user),
    // Home Page
    // Home Page actions
    // getGamesAct,
    // will act whenever a user moves into the home page
    getGamesForHome: async ({ dispatch }) => {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();
      today = yyyy + "-" + mm + "-" + dd;
      const homeGames = await home(today);
      homeGames.data?.results
        ? dispatch("setGames", homeGames.data.results)
        : dispatch("setNotFound", true) && dispatch("setGames", []);
    },

    // Search Page
    // Search Page actions
    // newSearchAction,
    // will act whenver a user types text into the search bar
    newSearchAction: async ({ commit, dispatch }, searchItem) => {
      commit("settingNewSearch", searchItem);
      dispatch("setNotFound", false);
      // call Axios to perform the search
      const games = await search(searchItem);
      console.log(games.data?.results);
      games.data?.results
        ? dispatch("setGames", games.data.results)
        : dispatch("setNotFound", true) && dispatch("setGames", []);
    },
    setNotFound: ({ commit }, status) => commit("settingNotFound", status),
  },
  plugins: [createPersistedState()],
});
