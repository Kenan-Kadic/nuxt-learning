export const state = () =>({
  count: 0,
})

export const actions = {
  incrementByOne(context) {
    setTimeout(function () {
      context.commit('incrementByOne');
    }, 2000);
  },
  increaseByTen(context, payload) {
    context.commit('increaseByTen', payload);
  },

  reset(context) {
    context.commit('reset');
  }
}

export const mutations = {
  incrementByOne(state) {
    state.count = state.count + 1;
  },

  increaseByTen(state, payload) {
    state.count = state.count + payload.value;
  },

  reset(state) {
    state.count = 0;
  },
}

export const getters = {

  finalCounter(state) {
    return state.count * 2;
  },

  // GETTERS CAN DEPEND ON OTHER GETTERS

  counterTimesTwo(state, getters){
    const finalCounter = getters.finalCounter;
    // instead of writing const finalCounter = state.counter * 2;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
}



