<template>
  <v-container>
    <v-row v-if="isAuth">
      <v-col>
        <h1 class="py-3">Getter showing Counter: {{ initialState }}</h1>
        <h1 class="pb-3">Getter showing Counter x 2: {{ countTimesTwo }} </h1>
        <v-btn @click="addOne">Increase by 1</v-btn>
        <v-btn @click="addTen">Increase by 10</v-btn>
        <v-btn @click="resetValue">Reset value</v-btn>
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

 export default {

   name: "counter",

   computed: {

     // THE GETTERS

     initialState() {
       return this.$store.getters["counter/initialState"];
     },

     countTimesTwo() {
       return this.$store.getters["counter/counterTimesTwo"];
     },

     isAuth() {
       return this.$store.getters["counter/userIsAuthenticated"];
     },
   },

   methods: {

     // MUTATIONS

     addOne() {
       this.$store.commit('counter/incrementByOne')
     },

     addTen() {
       this.$store.commit({
         type: 'counter/increaseByTen',
         value: 10
       });

     },
     resetValue() {
       this.$store.commit("counter/reset")
     },

     // ACTIONS

     login() {
       this.$store.dispatch("counter/login")
     },

     logout() {
       this.$store.dispatch("counter/logout")
     },

   }
 }


    // you usually don't commit mutations directly : you dispatch an actions which
    // does this for you in the store


</script>

<style scoped>

</style>
