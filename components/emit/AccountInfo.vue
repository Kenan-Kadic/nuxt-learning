<template>
  <v-container>
    <v-btn color="green" @click='changeUsername'>Change Username</v-btn>
    <h1>{{ username }}</h1>
  </v-container>
</template>

<script>
export default {
  name: "AccountInfo",

  props: {
    username: String
  },

  methods: {
    changeUsername() {
    this.$nuxt.$emit('change-username');
    }
  }

}

</script>

<style scoped>

</style>
