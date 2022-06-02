<template>
  <v-container>
    <h2>Type in Contact address in top component, hit save, it goes to the Vuex store, then is retrieved in second component</h2>
    <AddressTypedIn></AddressTypedIn>
    <v-divider></v-divider>
    <AddressShowsUp></AddressShowsUp>
  </v-container>
</template>

<script>
import AddressTypedIn from "~/components/store/AddressTypedIn";
import AddressShowsUp from "~/components/store/AddressShowsUp";
export default {
  name: "index.vue",
  components: {AddressTypedIn, AddressShowsUp}
}
</script>

<style scoped>

</style>
