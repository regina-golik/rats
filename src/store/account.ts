import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: null,
  },

  getters: {
    TODOS: (state) => {
      return state.todos;
    },
  },

  mutations: {
    SET_TODO: (state, payload) => {
      state.todos = payload;
    },

    ADD_TODO: (state, payload) => {
      state.todos.push(payload);
    },
  },

  actions: {
  },
});
