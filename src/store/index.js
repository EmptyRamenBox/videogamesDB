import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    user: ""
  },
  getters: {
    // getDrawer returns the state of the drawer
    getDrawer: state => state.drawer,
    getUser: state => state.User
  },
  mutations: {
    changeDrawer: (state, status) => (state.drawer = status),
    settinguser: (state, user) => (state.user = user)
  },
  actions: {
    // Drawer actions
    // Contain parameters to modify the state of the drawer
    hideDrawer: ({ commit }) => commit("changeDrawer", false),
    showDrawer: ({ commit }) => commit("changeDrawer", true),
    setUser: ({ commit }, user) => commit("settingUser", user)
  },
  plugins: [createPersistedState()]
});
