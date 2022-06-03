<template>
  <v-container>
    <h1 class="py-3">Counter: {{ theCount }}</h1>
    <h1 class="pb-3">Counter x 2: {{ countTimesTwo }}</h1>
    <v-btn @click="addOne">Increase by 1</v-btn>
    <v-btn @click="addTen">Increase by 10</v-btn>
    <v-btn @click="resetValue">Reset value</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "counter",

  computed: {
    theCount() {
      return this.$store.state.counter.count;
    },

    countTimesTwo() {
      return this.$store.getters["counter/normilizedCounter"]
    }

  },

  methods: {

    // you usually don't commit mutations directly you dispatch an actions which
    // does this for you in the store

    // addOne() {
    //   this.$store.commit('counter/increment')
    // },

    addOne() {
      this.$store.dispatch('counter/increment')
    },

    // usually you would not commit a mutation directly you would trigger
    // an action which will commit a mutation

    // addTen(){
    //  this.$store.commit('counter/increase', { value:10 })
    // },

    addTen(){
    this.$store.dispatch({
      type: 'counter/increase',
      value: 10
    });
    },

  //Do not commit mutations directly inside of pages or components
    // dispatch an action which will commit a mutation through context

    // resetValue(){
    //   this.$store.commit("counter/reset")
    // }

    resetValue(){
      this.$store.dispatch('counter/reset');
    }

  }
}

</script>

<style scoped>

</style>
