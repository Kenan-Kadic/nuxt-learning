<template>
  <v-container>
    <ActiveUser :username="user.name" :age="user.age"></ActiveUser>
    <UserData @user-data="emitUserdata"></UserData>
  </v-container>
</template>

<script>

import ActiveUser from "~/components/emit/ActiveUser";
import UserData from "~/components/emit/UserData";

export default {
  name: 'IndexPage',

  components: {ActiveUser, UserData},

  data() {
    return {
      user: {
        name: 'Kenan Kadic',
        age: '38'
      }
    }
  },
  methods: {
      emitUserdata(name, age) {
      this.user =
      {
        name: name,
        age: age,
      };
    },
    }


}
</script>

