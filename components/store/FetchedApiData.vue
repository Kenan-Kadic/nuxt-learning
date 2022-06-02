<template>
  <v-container>
    <h1>Fetch Users and Save to Store</h1>
    <v-btn class="green" @click="fetchSomething">Fetch API User DATA</v-btn>

    <h2>Display User Data (retrieved from store)</h2>
    <div v-for="(user, index) in usersFromStore" :key="index">
    <p>{{ user.id }}</p>
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
            alert(resp.data);
            this.users = resp.data;
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
      console.log(this.$store.state["store/data"])
      return this.$store.state["store/data"];
    },
  },
}
</script>

<style scoped>

</style>
