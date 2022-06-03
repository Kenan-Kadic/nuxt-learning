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
    addOne() {
      this.$store.commit('counter/increment')
    },

    addTen(){
     this.$store.commit('counter/increase', { value:10 })
    },

    resetValue(){
      this.$store.commit("counter/reset")
    }
  }
}

</script>

<style scoped>

</style>
