import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },
  getters: {
    user(state){
      return state.user
    },

    getIsLoggedIn({user}) {
      return user.displayName && user.email
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      }
    },
    logout({ commit }) {
      commit("SET_USER", {
        displayName: "",
        email: ""
      });
    }
  }
});