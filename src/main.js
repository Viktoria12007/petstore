import Vue from 'vue'
import store from './store/store';
import App from './App.vue'
import router from './router'
import './assets/app.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
