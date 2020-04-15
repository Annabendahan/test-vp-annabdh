import client from "../../api/mock/data/index";

export default {
  state: {
    destinations: [],
    search: {
      country: ""
    }
  },
  mutations: {
    SET_DESTINATIONS(state, destinations) {
      state.destinations = destinations;
    }
  },
  getters: {
    DESTINATIONS: state => {
      return state.destinations;
    }
  },
  actions: {
    GET_DESTINATIONS({ commit }, payload) {
      return client.destinations
        .search(payload)
        .then(destinations => commit("SET_DESTINATIONS", destinations));
    }
  }
};
