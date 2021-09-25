import Vue from "vue";
import Vuex from "vuex";
import shop from '@/api/productfile'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },

  getters: {
    availableProducts (state) {
      return state.products
    },
   
    cartProducts (state) {
      return state.cart
    },

    cartTotal (state, getters) {
      return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    },

    cartIteming(state){
      return state.cart.length
    }
    
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
    addProductToCart (context, product) {
      if (product.quantityInStock > 0) {
        const cartItem = context.state.cart.find(item => item.id === product.id)
        if (!cartItem) {
          context.commit('pushProductToCart', product)
        } else {
          context.commit('incrementItemQuantity', cartItem)
        }
       
      }
    },
  
    removeProduct (context, product) {
      context.commit('popProductFromCart', product.id)
      context.commit('incrementProductInventory', product)
    },

    removeCartProducts(context){
      context.commit('removeAllProducts')
    }
  },

  mutations: {
    setProducts (state,products){
      state.products = products
    },
    pushProductToCart (state, product) {
      state.cart.push({
        id: product.id,
        quantity: 1,
        title: product.name,
        price: product.price,
        productprice: product.price,
        newQuantityInStock: product.quantityInStock
      })
    },

    popProductFromCart(state){
      state.cart.pop()
    },

    removeAllProducts(state){
     state.cart = []
    },

    incrementProductInventory (state, product) {
      product.quantityInStock--
    },

    incrementItemQuantity (state, cartItem) {
      const product = state.products.find(product => product.id === cartItem.id)
      cartItem.quantity++
      product.quantityInStock--
      cartItem.productprice = cartItem.quantity * product.price
    }
  }
})