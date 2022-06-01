<template>
  <v-container>
    <AccountInfo :username="user.username" @changeUsername="user.username = 'Kenan'"></AccountInfo>
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

}
</script>

<style scoped>

</style>
