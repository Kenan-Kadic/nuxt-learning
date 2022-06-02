export const state = () =>({
  data: null,
})

export const mutations = {
  CHANGE_DATA(state, NewData) {
    state.data = NewData;
  }
}
