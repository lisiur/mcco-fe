import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    changeUser(state, payload) {
      this.user = Object.assign(state.user, payload)
    },
  },
  actions: {
  },
  modules: {
  }
})
