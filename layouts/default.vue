<template>
  <v-app dark>

    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu v-for="(item, index) in items" :key="index" offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="text--white font-weight-bold" text tile dark v-bind="attrs" v-on="on">{{item.title}}
            <v-icon class="mb-1">mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-card flat>
          <v-card-actions
            v-for="(child, index) in item.items"
            :key="child.title"
            class="pa-0"
          >
            <v-btn tile outlined block text class="green font-weight-medium px-3" :to="child.to">
              {{ child.title }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
      <v-btn @click="toggleTheme" text>Toggle Theme</v-btn>
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

      items: [
        {
          items: [
            {title: 'Emit an event', to:'/emit' },
            {title: 'Emit userdata', to: '/emit/userdata'}
          ],
          title: 'Emit',
        },
        {
          items: [
            {title: 'Pass a prop', to:'/prop/propparent' },
          ],
          title: 'Props',
        },
        {
          items: [
            {title: 'Fetch', to:'/api/fetch'},
          ],
          title: 'API',
        },
        {
          items: [
            {title: 'Vuex Mutation', to:'/store/mutation'},
            {title: 'Save Api Data', to:'/store/apidata'},
            {title: 'Counter', to: '/store/counter'}
          ],
          title: 'Store',
        },
      ],

      // links: [
      //   {label: 'Home', url:'/'},
      //   {label: 'Login', url:'/login'},
      //   // {label: 'Dashboard', url: '/dashboard'},
      //   // {label: 'Signup', url: '/signup'},
      //   {label: 'api Fetch', url: '/api'},
      //   {label: 'Store Mutation', url: '/store'},
      //   {label: 'Emit Event', url: '/emit'}
      // ],
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  }
}
</script>
