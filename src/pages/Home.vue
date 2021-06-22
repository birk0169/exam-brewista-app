<template>
  <div>
    <div class="home mx-10">
      <TheHeader 
        title="It's a Great" 
        highligtedTitle="Day for Coffee"
        destination="/beans"
        mode="cross" />
      <p class="font-bold my-4 text-gray-600">Previous Brews</p>
      <CombinationCard v-for="combination in combinations" :key="combination.id" :process="getProcessById(combination.methodId)" :coffeeBean="getBeanById(combination.coffeeBeanId)"/>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import CombinationCard from '../components/UI/CombinationCard.vue';
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/UI/TheHeader.vue'

export default {
  name: 'Home',
  components: {
    CombinationCard,
    TheFooter,
    TheHeader
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

<style scoped>
.home{
  margin-bottom: 85px;
}

.cross{
  fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px
}
</style>