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
        coffeeAmount: 33,
        waterAmount: 500,
        grind: 'Course',
        time: '4 min',
        guide: [
          {
            id: 0,
            step: 1,
            image: 'wlaberec.png',
            title: 'Planning out your coffee',
            description: 'To make good coffee you need good ingredients, start with high quality beans with the flavour you want. We recommend 60g/l The more you brew the coarser you need to grind the coffee'
          },
          {
            id: 1,
            step: 2,
            image: 'ncl4omsr.png',
            title: 'Measure and grind beans',
            description: 'Remember that the burrs on a grinder changes over time. You will need to test out some brews to find your perfect setting. Normally if the coffee tastes bitter amd dry, grind coarser, if weak and watery, grind finer. There is usually no need to adjust the coffee amount, simply adjust tand test different grind settings.'
          },
          {
            id: 2,
            step: 3,
            image: 'd7xp64x6.png',
            title: 'Filter',
            description: 'Remember that the burrs on a grinder changes over time. You will need to test out some brews to find your perfect setting. Normally if the coffee tastes bitter amd dry, grind coarser, if weak and watery, grind finer. There is usually no need to adjust the coffee amount, simply adjust tand test different grind settings.'
          },
          {
            id: 3,
            step: 4,
            image: '538gm3mc.png',
            title: 'Planning out your coffee',
            description: 'To make good coffee you need good ingredients, start with high quality beans with the flavour you want. We recommend 60g/l The more you brew the coarser you need to grind the coffee'
          },
          {
            id: 4,
            step: 5,
            image: '538gm3mc.png',
            title: 'Enjoy',
            description: 'Let your coffee cool down for 5 minutes for the most flavor. If it gets to cold you can heat it back up in a microwave.'
          },
        ]
      },
      {
        id: 1,
        name: 'Cold Infusion',
        icon: 'infusion',
        image: 'ColdBrew.jpg',
        coffeeAmount: 40,
        waterAmount: 200,
        grind: 'Course',
        time: '2 timer',
        guide: [
          {
            id: 0,
            step: 1,
            image: 'wlaberec.png',
            title: 'Planning out your coffee',
            description: 'To make good coffee you need good ingredients, start with high quality beans with the flavour you want. We recommend 60g/l The more you brew the coarser you need to grind the coffee'
          },
          {
            id: 1,
            step: 2,
            image: 'ncl4omsr.png',
            title: 'Measure and grind beans',
            description: 'Remember that the burrs on a grinder changes over time. You will need to test out some brews to find your perfect setting. Normally if the coffee tastes bitter amd dry, grind coarser, if weak and watery, grind finer. There is usually no need to adjust the coffee amount, simply adjust tand test different grind settings.'
          },
          {
            id: 2,
            step: 3,
            image: 'd7xp64x6.png',
            title: 'Filter',
            description: 'Remember that the burrs on a grinder changes over time. You will need to test out some brews to find your perfect setting. Normally if the coffee tastes bitter amd dry, grind coarser, if weak and watery, grind finer. There is usually no need to adjust the coffee amount, simply adjust tand test different grind settings.'
          },
          {
            id: 3,
            step: 4,
            image: '538gm3mc.png',
            title: 'Planning out your coffee',
            description: 'To make good coffee you need good ingredients, start with high quality beans with the flavour you want. We recommend 60g/l The more you brew the coarser you need to grind the coffee'
          },
          {
            id: 4,
            step: 5,
            image: '538gm3mc.png',
            title: 'Enjoy',
            description: 'Let your coffee cool down for 5 minutes for the most flavor. If it gets to cold you can heat it back up in a microwave.'
          },
        ]
      },
      {
        id: 2,
        name: 'Chemex',
        icon: 'chemex',
        image: 'AearoPress-Brew.jpg',
        coffeeAmount: 16,
        waterAmount: 230,
        grind: 'Fine',
        time: '3 min',
        guide: [
          {
            id: 0,
            step: 1,
            image: 'wlaberec.png',
            title: 'Planning out your coffee',
            description: 'To make good coffee you need good ingredients, start with high quality beans with the flavour you want. We recommend 60g/l The more you brew the coarser you need to grind the coffee'
          },
          {
            id: 1,
            step: 2,
            image: 'ncl4omsr.png',
            title: 'Measure and grind beans',
            description: 'Remember that the burrs on a grinder changes over time. You will need to test out some brews to find your perfect setting. Normally if the coffee tastes bitter amd dry, grind coarser, if weak and watery, grind finer. There is usually no need to adjust the coffee amount, simply adjust tand test different grind settings.'
          },
          {
            id: 2,
            step: 3,
            image: 'd7xp64x6.png',
            title: 'Filter',
            description: 'Remember that the burrs on a grinder changes over time. You will need to test out some brews to find your perfect setting. Normally if the coffee tastes bitter amd dry, grind coarser, if weak and watery, grind finer. There is usually no need to adjust the coffee amount, simply adjust tand test different grind settings.'
          },
          {
            id: 3,
            step: 4,
            image: '538gm3mc.png',
            title: 'Planning out your coffee',
            description: 'To make good coffee you need good ingredients, start with high quality beans with the flavour you want. We recommend 60g/l The more you brew the coarser you need to grind the coffee'
          },
          {
            id: 4,
            step: 5,
            image: '538gm3mc.png',
            title: 'Enjoy',
            description: 'Let your coffee cool down for 5 minutes for the most flavor. If it gets to cold you can heat it back up in a microwave.'
          },
        ]
      },
      {
        id: 3,
        name: 'Kalita Wave',
        icon: 'kalita',
        image: 'ColdBrew.jpg',
        coffeeAmount: 16,
        waterAmount: 230,
        grind: 'Fine',
        time: '3 min',
        guide: [
          {
            id: 0,
            step: 1,
            image: 'wlaberec.png',
            title: 'Planning out your coffee',
            description: 'To make good coffee you need good ingredients, start with high quality beans with the flavour you want. We recommend 60g/l The more you brew the coarser you need to grind the coffee'
          },
          {
            id: 1,
            step: 2,
            image: 'ncl4omsr.png',
            title: 'Measure and grind beans',
            description: 'Remember that the burrs on a grinder changes over time. You will need to test out some brews to find your perfect setting. Normally if the coffee tastes bitter amd dry, grind coarser, if weak and watery, grind finer. There is usually no need to adjust the coffee amount, simply adjust tand test different grind settings.'
          },
          {
            id: 2,
            step: 3,
            image: 'd7xp64x6.png',
            title: 'Filter',
            description: 'Remember that the burrs on a grinder changes over time. You will need to test out some brews to find your perfect setting. Normally if the coffee tastes bitter amd dry, grind coarser, if weak and watery, grind finer. There is usually no need to adjust the coffee amount, simply adjust tand test different grind settings.'
          },
          {
            id: 3,
            step: 4,
            image: '538gm3mc.png',
            title: 'Planning out your coffee',
            description: 'To make good coffee you need good ingredients, start with high quality beans with the flavour you want. We recommend 60g/l The more you brew the coarser you need to grind the coffee'
          },
          {
            id: 4,
            step: 5,
            image: '538gm3mc.png',
            title: 'Enjoy',
            description: 'Let your coffee cool down for 5 minutes for the most flavor. If it gets to cold you can heat it back up in a microwave.'
          },
        ]
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
    addNewCombination(state, payload){
      state.combinations.unshift(payload);
    }
  },
  actions: {
    addNewCombination(context, payload){
      context.commit('addNewCombination', 
        {
          id: 7,
          coffeeBeanId: payload.beanId,
          methodId: payload.methodId,
          favorite: false
        });
    }
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
