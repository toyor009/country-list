import { createStore } from "vuex";

import axios from "axios";

const store = createStore({
  state: {
    allCountries: [],
    requestStatus: "",
  },
  mutations: {
    SET_REQUEST_STATUS(state, status) {
      state.requestStatus = status;
    },

    SET_COUNTRIES(state, allCountries) {
      state.requestStatus = "SUCCESS";
      state.allCountries = allCountries.slice().sort((countryA, countryB) => {
        const first = countryA.name.common.toUpperCase();
        const second = countryB.name.common.toUpperCase();
        return first < second ? -1 : first > second ? 1 : 0;
      });
    },
  },

  actions: {
    fetchAllCountries(context) {
      context.commit("SET_REQUEST_STATUS", "LOADING");
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((response) => {
          context.commit("SET_REQUEST_STATUS", "SUCCESS");
          context.commit("SET_COUNTRIES", response.data);
          context.commit("SET_REQUEST_STATUS", "IDLE");
        })
        .catch((error) => {
          console.log(">>> request error", error);
          context.commit("SET_REQUEST_STATUS", "ERROR");
        });
    },
  },

  modules: {},
});

export const useStore = () => store;
