<template>
  <v-container>
    <AccountInfo :username="user.username"></AccountInfo>
  </v-container>
</template>

<script>

import AccountInfo from "~/components/emit/AccountInfo";
export default {
  name: "index",
  components: {AccountInfo},

  data() {
    return {
      user: {
        username: 'Matt'
      }
    }
  },

  created() {
    this.$nuxt.$on('change-username', () => {
      if (this.user.username === 'Matt') {
        this.user.username = 'Kenan';
      } else {
        this.user.username = 'Matt';
      }
    })
  },

  beforeDestroy(){
    this.$nuxt.$off('change-username')
  }
}
</script>

<style scoped>

</style>
