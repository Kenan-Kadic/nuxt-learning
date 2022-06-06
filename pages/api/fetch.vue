<template>
  <v-container>
    <v-btn @click="fetchSomething">Fetch Something</v-btn>
    <v-spacer></v-spacer>
    <h1>{{ ip }}</h1>
    <v-card>
      <v-card-text>
        <p>Userid: {{ip.userId}}</p>
        <p>Id: {{ip.id}}</p>
        <p>Title: {{ip.title}}</p>
        <p class="mb-15">Completed: {{ip.completed}}</p>
        <h1>Pull Data from Other API Fetch that is in Vuex store</h1>

        <div v-for="(user, index) in usersFromStore" :key="index">
          <p>{{ user.id }}</p>
          <p>{{ user.address.city }}</p>
          <p>{{ user.website }}</p>
        </div>

      </v-card-text>

    </v-card>
        <v-dialog v-model="successDialog" max-width="500">
      <v-card>
        <v-card-title class="primary d-flex justify-center display-1">Success!</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-5">
          <v-row>
            <v-col>
              <span class="display-1">You have successfully fetched some data!</span>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <h5>Redirect in {{ successTimer }} seconds...</h5>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="errorDialog" max-width="500">
      <v-card>
        <v-card-title class="red d-flex justify-center display-1">Error!</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-5">
          <v-row>
            <v-col>
              <span class="display-1">We're so sorry, but something went wrong. Please try again.</span>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <h5>Closing in {{ errorTimer }} seconds...</h5>
        </v-card-actions>
      </v-card>
    </v-dialog>


  </v-container>
</template>

<script>
export default {
  name: "fetch",

  data(){
  return {
      message:'You just received a message',

      thinking: false,
      ip: [],
      userId: '',
      id: '',
      title: '',
      completed: false,
      successDialog: false,
      errorDialog: false,
      successTimer: 5,
      errorTimer: 5,
      users: []

  }
},

  methods: {

    fetchSomething() {
      this.$store.dispatch('fetch/fetchAPI')
        .then(resp => {
          if (resp.status === 200) {
            this.thinking = false;
            this.ip = resp.data;
            console.log(this.ip)
            this.handleSuccess();
          }
        })
        .catch(err => {
          console.error(err);
          this.thinking = false;
          this.handleError();
        })
    },

    // fetchSomething() {
    //   this.thinking = true
    //   console.log('function has run')
    //   this.$axios.get('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(resp => {
    //       if (resp.status === 200) {
    //         this.thinking = false;
    //         this.ip = resp.data;
    //         this.handleSuccess();
    //       }
    //     })
    //     .catch(err => {
    //       console.error(err);
    //       this.thinking = false;
    //       this.handleError();
    //     })
    // },

    handleSuccess() {
      this.successDialog = true;
      this.successTimer = 5;
      setInterval(() => {
        this.successTimer -= 1
      }, 1000)
    },

    handleError() {
      this.errorDialog = true;
      this.errorTimer = 5;
      setInterval(() => {
        this.errorTimer -= 1
      }, 1000)
    },
  },

  computed: {
    usersFromStore() {
      return this.$store.state.fetch.data
    },
  },

    watch: {
      successTimer() {
        if (this.successTimer <= 0) {
          this.successDialog = false;
        }
      },
      errorTimer() {
        if (this.errorTimer <= 0) {
          this.errorDialog = false;
        }
      },
    }

  }
</script>

<style scoped>

</style>
