<template>
  <v-container>
    <h2>This button (in child component) makes the existing dialog (currently hidden in parent component) visible</h2>
    <v-btn color="green" @click='revealDialog'>Make Dialog visible</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "AccountInfo",

  props: {
    username: String
  },

  methods: {
    revealDialog() {
    this.$nuxt.$emit('reveal-dialog');
    }
  }

}

</script>

<style scoped>

</style>
