<template>
  <div>
    <div class="home mx-10">
      <header class="flex justify-between items-start my-20">
        <h1 class="text-3xl">It's a Great <span class="font-bold">Day for Coffee</span></h1>
        <router-link to="/" class="bg-black rounded-full p-4 ml-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="22.015" height="22.015" viewBox="0 0 22.015 22.015">
            <path class="cross" d="M16.008,6V16.008m0,0V26.015m0-10.008H26.015m-10.008,0H6" transform="translate(-5 -5)"/>
          </svg>
        </router-link>
      </header>
      <p class="font-bold my-4 text-gray-600">Previous Brews</p>
      <CombinationCard v-for="combination in combinations" :key="combination.id" :process="getProcessById(combination.methodId)" :coffeeBean="getBeanById(combination.coffeeBeanId)"/>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import CombinationCard from '../components/UI/CombinationCard.vue';
import TheFooter from '../components/TheFooter.vue'

export default {
  name: 'Home',
  components: {
    CombinationCard,
    TheFooter
  },
  computed: {
    combinations(){
      return this.$store.getters.getCombinations;
    }
  },
  methods: {
    getProcessById(id){
      const process = this.$store.getters.getMethods.filter(m => m.id == id);
      return process[0];
    },
    getBeanById(id){
      const bean = this.$store.getters.getBeans.filter(b => b.id == id);
      return bean[0];
    }
  }
}
</script>

<style>
.home{
  margin-bottom: 85px;
}

.cross{
  fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px
}
</style>