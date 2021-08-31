import axios from 'axios';
const state = {
      products: {}
    };
const getters = {
        'PRODUCTS'(state) {
            return state.products;
        }
    };
const actions = {
        'INIT_STORE'({commit}) {
         return axios('http://localhost:3000/products', {
             method: "GET"
          })
      .then(response => {
          commit('SET_STORE', response.data)
          console.log(response.data);
     //    this.PRODUCTS = response.data;
     //    console.log(this.products);
      }) 
        }
    };
const mutations = {
        'SET_STORE': (state, products) => {
            state.products = products;
        }
    };

    export default {
        state,
        getters,
        actions,
        mutations
    }