<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Contact Address</h1>
    <v-form>
      <v-text-field filled label="Contact Address" v-model="address"> </v-text-field>
      <v-btn color="primary" @click="saveData">Save Data</v-btn>
    </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HistoricContact",

  data() {
    return {
      address: '',
    }
  },
  methods: {
    saveData() {
      this.$store.commit('historic/CHANGE_ADDRESS', this.address);
      console.log(this.address)
    }
  },

}
</script>

<style scoped>

</style>
