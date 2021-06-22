import { createStore } from 'vuex'

export default createStore({
  state: {
    coffeeBeans: [
      {
        id: 0,
        name: 'KIENI ESPRESSO',
        makers: 'Coffee Collective',
        description: 'En frugtbombe af en espresso med aroma af brombær, solbær, stikkelbær og fyldig, olieret afslutning.',
        details: {
          process: 'Washed',
          profile: 'Medium',
          varieties: 'Castilo, Caturra',
          country: 'Guatemala',
        },
        cardMode: 'dark-green'
      }, 
      {
        id: 1,
        name: 'KIENI',
        makers: 'Coffee Collective',
        description: 'Saftig syrlighed med intens sødme. Fyldig og læskende med kompleks aroma af solbær, stikkelbær og brombær',
        details: {
          process: 'Washed',
          profile: 'Medium',
          varieties: 'Castilo, Caturra',
          country: 'Guatemala',
        },
        cardMode: 'beige'
      }
    ],
    coffeeMethods: [
      {
        id: 0,
        name: 'French Press',
        icon: 'french',
        image: 'AearoPress-Brew.jpg',
        coffeAmount: 33,
        waterAmount: 500,
        grind: 'Course',
        time: '4 min'
      },
      {
        id: 1,
        name: 'Cold Infusion',
        icon: 'infusion',
        image: 'ColdBrew.jpg',
        coffeAmount: 40,
        waterAmount: 200,
        grind: 'Course',
        time: '2 timer'
      },
      {
        id: 2,
        name: 'Chemex',
        icon: 'chemex',
        image: 'AearoPress-Brew.jpg',
        coffeAmount: 16,
        waterAmount: 230,
        grind: 'Fine',
        time: '3 min'
      },
      {
        id: 3,
        name: 'Kalita Wave',
        icon: 'kalita',
        image: 'ColdBrew.jpg',
        coffeAmount: 16,
        waterAmount: 230,
        grind: 'Fine',
        time: '3 min'
      }
    ],
    combinations: [
      {
        id: 0,
        coffeeBeanId: 0,
        methodId: 1,
        favorite: true
      },
      {
        id: 1,
        coffeeBeanId: 1,
        methodId: 2,
        favorite: false
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getBeans(state){
      return state.coffeeBeans;
    },
    getMethods(state){
      return state.coffeeMethods;
    },
    getCombinations(state){
      return state.combinations;
    },
    getFavCombinations(state){
      return state.combinations.filter(c => c.favorite === true);
    }
  },
  modules: {
    
  }
})
