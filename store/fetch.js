export const state = () =>({
  data: null,
})

export const actions = {
  async fetchAPI(context){
    this.thinking = true
    console.log('function has run')
    const resp = await this.$axios.get('https://jsonplaceholder.typicode.com/todos/1')
    return resp
  },
}

export const mutations = {
  CHANGE_DATA(state, NewData) {
    state.data = NewData;
  }
}
