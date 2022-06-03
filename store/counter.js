export const state = () =>({
  count: 0,
})

export const actions = {
  increment(context) {
    setTimeout(function () {
      context.commit('increment');
    }, 2000);
  },
  increase(context, payload) {
    context.commit('increase', payload);
  },

  reset(context) {
    context.commit('reset');
  }
}

export const mutations = {
  increment(state) {
    state.count = state.count + 1;
  },

  increase(state, payload) {
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

  normilizedCounter(state, getters){
    const finalCounter = getters.finalCounter;
    // const finalCounter = state.counter * 2;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
}



