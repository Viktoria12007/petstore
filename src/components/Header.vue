<template>
  <header>
    <div class="navbar navbar-default">
      <div class="navbar-header">
        <h1>
          <router-link :to="{name: 'iMain'}">
            {{ sitename }}
          </router-link>
        </h1>
      </div>
      <div class="nav navbar-nav navbar-right cart">
        <router-link
          active-class="active"
          tag="button"
          :to="{name: 'Form'}"
          class="btn btn-default btn-lg"
          >
          <span class="glyphicon glyphicon-shopping-cart">
            {{ cartItemCount }}
          </span>
          Checkout
        </router-link>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'my-header',
  data() {
    return {
      sitename: "Vue.js Pet Depot",
    }
  },
  props: ['cartItemCount'],
  methods: {
    
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: black;
}
.router-link-exact-active {
  color: blue;
}
</style>

