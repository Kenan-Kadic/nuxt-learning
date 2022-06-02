<template>
  <v-container>
    <AccountInfo></AccountInfo>
    <v-dialog v-model="dialog">
      <v-card min-height="500" color="blue">
        <v-card-title>Kenan's Dialog is now visible</v-card-title>
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
      dialog: false
    }
  },

  created() {
    this.$nuxt.$on('reveal-dialog', () => {
      this.dialog = true;
    })
  },

  beforeDestroy(){
    this.$nuxt.$off('reveal-dialog')
  }
}
</script>

<style scoped>

</style>
