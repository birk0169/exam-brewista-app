<template>
  <router-view v-slot="slotProps"> 
    <transition name="route">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default{
  created(){
      this.$store.dispatch('loadDBToState');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

.route-enter-active{
  width: 100vw;
  position: absolute;
  animation: slide-in-alt 1s;
}

.route-leave-active{
  width: 100vw;
  position: absolute;
  animation: slide-out-alt 1s;
}

@keyframes slide-in-alt{
  0% {
    transform: translateX(100vw);
    opacity: 0;
  }
  100%{
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-out-alt{
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100%{
    transform: translateX(-100vw);
    opacity: 0;
  }
}
</style>
