<template>
  <v-container>
    <v-btn @click="fetchSomething">Fetch Something</v-btn>
    <h1>{{ ip }}</h1>
  </v-container>
</template>

<script>
export default {
  name: "api",

  data(){
  return {
    ip: []
  }
},

  methods: {
    fetchSomething() {
      console.log('function has run')
       this.$axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(resp => {
          if (resp.status === 200) {
            console.log('then request has run')
            this.ip = resp.data;
            console.log(resp.data)
            console.log(this.ip)
          }
        })
        .catch(err => {
          console.log(err)
          })
    }

    }
  }
</script>

<style scoped>

</style>
