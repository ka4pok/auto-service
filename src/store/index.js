import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from "./info";
import firebase from "firebase";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    cart: [],
    totalPrice: [],
  },
  mutations: {
    setError(state, error){
      state.error= error
    },
    clearError(state){
      state.error = null
    },
    setCart(state, product){
      if(state.cart.length){
        let isProductExist =false;
        state.cart.map(item=>{
          if(item.id === product.id){
            isProductExist = true;
          }
        })
        if(!isProductExist){
          state.cart.push(product);
        }
      }
      else{
        state.cart.push(product);
      }

    },
    removeFromCart(state, index){
      state.cart.splice(index, 1)
    }

  },
  actions:{
    async createCart({dispatch, commit}, {price}){
      try{
        const uid =  await dispatch('getUid')
        const cart12 = await firebase.database().ref(`/users/${uid}/basket`).push({price})

      } catch (e) {
        commit('setError', e)
        throw e
      }

    },
    ADD_TO_CART({commit, dispatch}, product){
      commit('setCart', product)
    },
    DELETE_FROM_CART({commit}, index){
      commit('removeFromCart', index)
    }
  },
getters:{
    error: s=> s.error,
    CART(state){
      return state.cart
    }
},
  modules: {
    auth, info
  }
})
