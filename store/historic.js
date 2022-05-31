export const state = () =>({
  address: '',
})

export const mutations = {
  CHANGE_ADDRESS(state, address) {
    state.address = address;
  }
}
