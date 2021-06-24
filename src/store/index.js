import { createStore } from 'vuex'

export default createStore({
  state: {
    coffeeBeans: [],
    coffeeMethods: [],
    combinations: []
  },
  mutations: {
    addNewCombination(state, payload){
      state.combinations.unshift(payload);
    },
    setState(state, payload){
      state.coffeeBeans = payload.coffeeBeans;
      state.coffeeMethods = payload.coffeeMethods;
      state.combinations = payload.combinations;
    }
  },
  actions: {
    addNewCombination(context, payload){
      context.commit('addNewCombination', 
        {
          id: Math.floor(Math.random() * 100) + 1,
          coffeeBeanId: payload.beanId,
          methodId: payload.methodId,
          favorite: false
        });
    },
    passCombinationToDB(_, payload){
      fetch('https://brewista-app-default-rtdb.europe-west1.firebasedatabase.app/data/-McxhnXjBvVnsSheN31t/combinations.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: payload.id,
          coffeeBeanId: payload.beanId,
          methodId: payload.methodId,
          favorite: payload.isFavorite
        })
      }).then((response) => {
        if(response.ok){
          //...
        } else {
          throw new Error('Could not save data!');
        }
      })
    },
    loadDBToState(context){
      this.isLoading = true;
      this.error = null;
      fetch('https://brewista-app-default-rtdb.europe-west1.firebasedatabase.app/data/-McxhnXjBvVnsSheN31t.json')
        .then((response) => {
          if(response.ok){
            return response.json();
          }
        }
      ).then((data) => {
        this.isLoading = false;
        const results = [];
        context.commit('setState', data);
        this.results = results;
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
        this.error = 'Failed to fetch data - please try again later';
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
