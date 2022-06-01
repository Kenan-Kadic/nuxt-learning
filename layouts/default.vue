<template>
  <v-app dark>

    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="(link, index) in links" :key="link.label" text rounded :to="link.url">{{link.label}}</v-btn>
      <v-btn @click="toggleTheme" text rounded>Toggle Theme</v-btn>
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>

    <v-footer
      color="primary lighten-1"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="(link, index) in links"
          :key="index"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.url"
        >
          {{ link.label }}
        </v-btn>

        <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      links: [
        {label: 'Home', url:'/'},
        {label: 'Login', url:'/login'},
        // {label: 'Dashboard', url: '/dashboard'},
        // {label: 'Signup', url: '/signup'},
        {label: 'API Fetch', url: '/api'},
        {label: 'Store Mutation', url: '/store'},
        {label: 'Emit Event', url: '/emit'}
      ],
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  }
}
</script>
