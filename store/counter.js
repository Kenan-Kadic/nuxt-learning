export const state = () =>({
  count: 0,
  isLoggedIn: false
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
  },

  login(context) {
    context.commit('setAuth', { isAuth: true });
  },

  logout(context) {
    context.commit('setAuth', { isAuth: false });
  },

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

  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  }
}

export const getters = {

  userIsAuthenticated(state) {
    return state.isLoggedIn;
  },

  finalCounter(state) {
    return state.count * 2;
  },

  initialState(state){
    return state.count
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



