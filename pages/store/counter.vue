<template>
  <v-container>
    <h1>Counter: {{ theCount }}</h1>
    <v-btn @click="addOne">Increase count</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "counter",

  computed: {
    theCount() {
      return this.$store.state.counter.count;
    }
  },

  methods: {
    addOne() {
      this.$store.commit('counter/increase');
    }
  }
}

</script>

<style scoped>

</style>
