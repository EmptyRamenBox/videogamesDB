import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false
  },
  getters: {
    // getDrawer returns the state of the drawer
    getDrawer: state => state.drawer
  },
  mutations: {
    changeDrawer: (state, status) => (state.drawer = status)
  },
  actions: {
    // Drawer actions
    // Contain parameters to modify the state of the drawer
    hideDrawer: ({ commit }) => commit("changeDrawer", false),
    showDrawer: ({ commit }) => commit("changeDrawer", true)
  },
  plugins: [createPersistedState()]
});
