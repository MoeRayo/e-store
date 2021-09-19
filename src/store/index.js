import Vue from "vue";
import Vuex from "vuex";
import slide from '@/api/carousel'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {

        carousels: [],
    },
    getters: {
        availableCarousels (state) {
          return state.carousels
        },
    },    
    actions: {
        fetchCarousels ({commit}) {
          return new Promise((resolve) => {
            slide.getCarousel(carousels => {
              commit('setCarousel', carousels)
              resolve()
            })
          })
        },

    },
    mutations: {

      setCarousel (state,carousels){
        state.carousels = carousels
      },
    }

})