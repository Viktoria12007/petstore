<template>
  <div>
      <my-header></my-header>
      <h1> This is the id {{ $route.params.id }}</h1>
      <div class="row">
          <div class="col-md-5 col-md-offset-0">
              <figure>
                  <img 
                  class="product"
                  :src=" require('../../static/images/' + product.image) "
                  >
              </figure>
          </div>
          <div class="col-md-6 col-md-offset-0 description">
              <h1>{{product.title}}</h1>
              <p v-html="product.description"></p>
              <p class="price">
                  {{product.price}}
              </p>
          </div>
      </div>
  </div>
</template>
<script>
import axios from 'axios'
import MyHeader from './Header.vue'

export default {
  name: 'product',
  components: { MyHeader },
  data() {
    return {
      product: '',
    }
  },
  props: {},
  methods: {

  },
  created() {
    return axios('http://localhost:3000/products', {
           method: "GET"
        })
    .then(response => {
        this.product = response.data.filter(data => data.id == this.$route.params.id)[0]
    //   this.product.image = '/' + this.product.image;
    //   this.product = response.data.filter(data => {
    //     data.id === this.$route.params.id
    //   });
    })
}
}
</script>
<style scoped>

</style>