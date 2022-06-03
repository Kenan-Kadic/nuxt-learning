<template>
  <v-container>
    <v-row v-if="isAuth">
      <v-col>
    <h1 class="py-3">Counter: {{ theCount }}</h1>
    <h1 class="pb-3">Getter of Counter x 2: {{ countTimesTwo }} </h1>
    <v-btn @click="inc">Increase by 1</v-btn>
    <v-btn @click="ten({value: 10})">Increase by 10</v-btn>
    <v-btn @click="res">Reset value</v-btn>
      </v-col>
    </v-row>

    <v-row class="mt-15">
      <v-col cols="12">
        <v-card color="green" max-width="300">
          <v-card-title>Authorization</v-card-title>
          <v-card-actions class="my-5">
          <v-btn @click="login" v-if="!isAuth">Login</v-btn>
          <v-btn @click="logout" v-if="isAuth">Logout</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
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
     countTimesTwo : 'counter/counterTimesTwo',
     isAuth : 'counter/userIsAuthenticated'
    })

  },

  methods: {

   // see comments below

    ...mapActions({
      inc: 'counter/incrementByOne',
      ten: 'counter/increaseByTen',
      res: 'counter/reset',

      login: 'counter/login',
      logout: 'counter/logout',
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
