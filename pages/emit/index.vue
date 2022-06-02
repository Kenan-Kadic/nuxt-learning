<template>
  <v-container>
    <AccountInfo></AccountInfo>
  </v-container>
</template>

<script>

import AccountInfo from "~/components/emit/AccountInfo";
export default {
  name: "index",
  components: {AccountInfo},

  created() {
    this.$nuxt.$on('change-username', () => {
      this.user.username = 'Kenan';
    })
  },

  beforeDestroy(){
    this.$nuxt.$off('change-username')
  }
}
</script>

<style scoped>

</style>
