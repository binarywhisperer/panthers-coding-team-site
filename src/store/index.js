import Vue from "vue";
import Vuex from "vuex";
import Schedule from "./schedule.js";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    schedule: Schedule,
  }
});