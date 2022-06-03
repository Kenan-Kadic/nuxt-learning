export const state = () =>({
  count: 0,
})

export const mutations = {
  increase(state) {
    state.count = state.count + 1;
  }
}

