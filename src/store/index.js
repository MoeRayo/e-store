import Vue from "vue";
import Vuex from "vuex";
import shop from '@/api/productfile'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    // cart: []
  },
  getters: {
    availableProducts (state) {
      return state.products
    },
  },
  actions: {
    fetchProducts ({commit}) {
      return new Promise((resolve) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    },
  },
  mutations: {
    setProducts (state,products){
      state.products = products
    },
  }

})