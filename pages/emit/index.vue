<template>
  <v-container>
    <AccountInfo @reveal-vue-dialog="toggleVueDialog"></AccountInfo>
    <v-dialog v-model="nuxtDialog">
      <v-card min-height="500" color="blue">
        <v-card-title>Kenan's Nuxt Dialog is now visible</v-card-title>
      </v-card>
    </v-dialog>
    <v-dialog v-model="vueDialog">
      <v-card min-height="500" color="green">
        <v-card-title>Kenan's Vue Dialog is now visible</v-card-title>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>

import AccountInfo from "~/components/emit/AccountInfo";
export default {
  name: "index",
  components: {AccountInfo},

  data() {
    return {
      nuxtDialog: false,
      vueDialog: false,
    }
  },

  methods: {
    toggleVueDialog() {
      alert('this works')
      this.vueDialog = true;
    },
  },

  created() {
    this.$nuxt.$on('reveal-nuxt-global-dialog', () => {
      this.nuxtDialog = true;
    })
  },

  beforeDestroy(){
    this.$nuxt.$off('reveal-dialog')
  }
}
</script>

<style scoped>

</style>
