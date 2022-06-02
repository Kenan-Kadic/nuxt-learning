<template>
  <v-row>
    <v-col cols="12">
      <h1>{{ header }}</h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ChangeText",

  props:{ header: String},

  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>
