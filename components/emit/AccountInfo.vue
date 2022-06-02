<template>
  <v-container>
     <h1 class="mb-5">{{ user.username }}</h1>
    <v-btn color="green" @click='changeUsername'>Change Username</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "AccountInfo",

  data() {
    return {
      user: {
        username: 'Matt'
      }
    }
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
