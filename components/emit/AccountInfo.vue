<template>
  <v-container>
    <v-row>
      <v-col>
    <h2>This button (in child component) makes the existing dialog (currently hidden in parent component) visible (NUXT on GLOBAL VERSION)</h2>
    <v-btn color="green" @click='revealDialogNuxt'>Make NUXT Dialog visible</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
    <h2>This button (in child component) makes the existing dialog (currently hidden in parent component) visible (VUE EMIT not global)</h2>
    <v-btn color="green" @click="revealVueDialog">Make Vue Dialog visible</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AccountInfo",

  props: {
    username: String,
    dialogID: Number,
  },

  methods: {
    revealDialogNuxt() {
    this.$nuxt.$emit('reveal-nuxt-global-dialog');
    },
    revealVueDialog() {
    this.$emit('reveal-vue-dialog', );
    }
  }

}

</script>

<style scoped>

</style>
