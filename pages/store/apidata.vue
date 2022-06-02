<template>
  <v-container>
    <FetchedApiData></FetchedApiData>
  </v-container>
</template>

<script>

import FetchedApiData from "~/components/store/FetchedApiData";

export default {
  name: "apidata",

  components: {FetchedApiData},

  data() {
    return {
      users: null,
    }
  },


}
</script>

<style scoped>

</style>
