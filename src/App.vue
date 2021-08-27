<template>
  <div id="app">
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fide-leave-active {
  transition: opacity .5s ease-out;
}
</style>
