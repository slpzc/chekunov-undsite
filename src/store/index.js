import Vue from 'vue'
import Vuex from 'vuex'
import nav from './modules/nav'
import aboutService from "./modules/aboutService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  nav, aboutService
  }
})
