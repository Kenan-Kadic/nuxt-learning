<template>
  <v-container>
    <h1>Fetch User Data via API and save data to Vuex Store right away</h1>
    <v-btn class="green my-5" @click="fetchSomething">Fetch API User DATA</v-btn>

    <h1>Display User Data (retrieved from Vuex store after Fetch) for Each User in User Data Object</h1>
    <div class="my-5" v-for="(user, index) in usersFromStore" :key="index">
    <h1>User Id: {{ user.id }}</h1>
    <h2 class>User City: {{ user.address.city}}</h2>
    <h2 class>Website: {{ user.website}}</h2>
     </div>
  </v-container>
</template>

<script>
export default {
  name: "FetchedApiData",

  data() {
    return {
      users: [],
    }
  },

  methods: {
    fetchSomething() {
      console.log('function has run')
      this.$axios.get('https://jsonplaceholder.typicode.com/users')
        .then(resp => {
          if (resp.status === 200) {
            this.users = resp.data;
            console.log(this.users)
            this.$store.commit("store/CHANGE_DATA", this.users);
          }
        })
        .catch(err => {
          console.error(err);
        })
    },
  },

  computed: {
    usersFromStore() {
      return this.$store.state.store.data
    },
  },
}
</script>

<style scoped>

</style>
