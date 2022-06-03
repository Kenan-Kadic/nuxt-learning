<template>
  <v-container>
    <h1 class="py-3">Counter: {{ theCount }}</h1>
    <h1 class="pb-3">Getter of Counter x 2: {{ countTimesTwo }} </h1>
    <v-btn @click="inc">Increase by 1</v-btn>
    <v-btn @click="ten({value: 10})">Increase by 10</v-btn>
    <v-btn @click="res">Reset value</v-btn>
  </v-container>
</template>

<script>
 import { mapGetters, mapActions } from 'vuex';

 export default {

  name: "counter",

  computed: {
    theCount() {
      return this.$store.state.counter.count;
    },

    // countTimesTwo() {
    //   return this.$store.getters["counter/counterTimesTwo"]
    // }

    //shortcut for the getter above

    ...mapGetters({
     countTimesTwo : 'counter/counterTimesTwo'
    })

  },

  methods: {

   // see comments below

    ...mapActions({
      inc: 'counter/incrementByOne',
      ten: 'counter/increaseByTen',
      res: 'counter/reset'
    }),

  }
}

    // you usually don't commit mutations directly : you dispatch an actions which
    // does this for you in the store

    // addOne() {
    //   this.$store.commit('counter/incrementByOne')
    // },

    // addOne() {
    //   this.$store.dispatch('counter/incrementByOne')
    // },

    //a shortcut for incrementByOneMethod method

        // usually you would not commit a mutation directly

    // addTen(){
    //  this.$store.commit('counter/increase', { value:10 })
    // },

    // addTen(){
    // this.$store.dispatch({
    //   type: 'counter/increase',
    //   value: 10
    // });
    // },

    // resetValue(){
    //   this.$store.commit("counter/reset")
    // }

    // resetValue(){
    //   this.$store.dispatch('counter/reset');
    // }

</script>

<style scoped>

</style>
