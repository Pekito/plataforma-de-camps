import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    logged: true
  },
  mutations: {
    TOGGLE_DRAWER(state, payload) {
      state.drawer = payload;
    },
    MUTATE_LOGGED(state, payload) {
      state.logged = payload;
    }
  },
  actions: {},
  modules: {}
});
