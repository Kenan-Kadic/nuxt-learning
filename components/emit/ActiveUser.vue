<template>
  <v-row>
    <v-col>
      <h2>Username: {{ username }}</h2>
      <h3>Age: {{ age }}</h3>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ActiveUser",
  props: ['username', 'age'],
}
</script>

<style scoped>

</style>
