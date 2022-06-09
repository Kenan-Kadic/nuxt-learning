<template>
  <v-row>
    <v-col>
      <v-text-field label="Username" v-model="user.name"></v-text-field>
    </v-col>
    <v-col>
      <v-text-field label="Age" v-model="user.age" ></v-text-field>
    </v-col>
    <v-col>
      <v-btn @click="emitUserdata">Set UserData</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "UserData",

  data(){
    return {
      user:
        {
          name: '',
          age: '',
        }
    }
  },

  methods: {
    emitUserdata() {
      this.$emit('user-data', this.user.name, this.user.age)
    },
  }
  }

</script>

<style scoped>

</style>
