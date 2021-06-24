<template>
  <div>
    <div class="mx-10">
      <TheHeader 
        title="Favorites"
        destination="/beans"
        mode="cross" />
      <div class="sm:flex sm:flex-wrap md:justify-between">
        <CombinationCard 
          v-for="combination in combinations" 
          :key="combination.id" 
          :process="getProcessById(combination.methodId)" 
          :coffeeBean="getBeanById(combination.coffeeBeanId)"
          :isFavorite="true"
          />
      </div>
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import CombinationCard from '../components/UI/CombinationCard.vue';
import TheFooter from '../components/TheFooter.vue'
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
      return this.$store.getters.getFavCombinations;
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