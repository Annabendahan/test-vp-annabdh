import Vue from "vue";
import Vuex from "vuex";
import destinations from "./modules/destinations";

Vue.use(Vuex);

// TODO :  implement mock data https://tahazsh.com/use-mock-data-in-vue

export default new Vuex.Store({
  modules: {
    destinations
  }
});
