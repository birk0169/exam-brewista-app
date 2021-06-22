<template>
    <div>
        <div class="steps-container flex overflow-hidden">
            <MethodStep v-for="step in coffeeMethod.guide" :key="step.id" :methodStep="step" />
        </div>
        <div class="fixed bottom-2 w-screen">
            <div class="flex p-4 m-8 bg-yellow-200 rounded-full items-center justify-between">
                <button @click="prevStep">
                    <svg class="w-8 h-6">
                        <use xlink:href="#arrowBack" />
                    </svg>
                </button>
                <div class="flex w-2/5 justify-between">
                    <div v-for="step in coffeeMethod.guide" :key="step.id">
                        <div v-if="step.step == currentStep" class="p-1 bg-black border-2 border-black rounded-full" ></div>
                        <div v-else class="p-1 border-2 border-black rounded-full" ></div>
                    </div>
                </div>
                <button @click="nextStep">
                    <svg class="w-8 h-4">
                        <use xlink:href="#arrowForward" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import MethodStep from '../components/UI/MethodStep.vue';

export default {
  props: ['beanId', 'methodId'],
  components: {
      MethodStep
  },
  data(){
      return {
          scrollPos: 0,
          currentStep: 1
      };
  },
  computed: {
    coffeeMethod(){
        const process = this.$store.getters.getMethods.filter(m => m.id == this.methodId);
        return process[0];
    }
  },
  methods: {
    scroll(scrollValue){
      const scrollLength = window.innerWidth * scrollValue;

      this.scrollPos = scrollLength;

      document.querySelector(".steps-container").scrollTo(this.scrollPos, 0);
    },
    nextStep(){
        if(this.currentStep != this.coffeeMethod.guide.length){
            this.currentStep++;
            this.scroll(this.currentStep - 1);
        } else{
            this.$store.dispatch('addNewCombination', {
                beanId: this.beanId,
                methodId: this.methodId
            })
            this.$router.push('/');
        }

    },
    prevStep(){
        if(this.currentStep > 1){
            this.currentStep--;
            this.scroll(this.currentStep - 1);
        } else{
            this.$router.push('/methods/' + this.beanId);
        }

    }
  },
//   watch: {
//       $route(to){
//           this.scroll(to.param.step);
//           this.currentStep = to.params.step;
//       }
//   }
}
</script>

<style scoped>
.steps-container {
    transition: scroll 1s ease-in;
    scroll-behavior: smooth;
}
</style>