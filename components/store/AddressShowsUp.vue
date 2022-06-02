<template>
  <v-container>
    <v-row>
      <v-col>
    <h1>Historic Inquiry</h1>
        <v-form>
          <v-text-field filled :value="savedAddress"></v-text-field>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HistoricInquiry",

  computed: {
    savedAddress() {
      return this.$store.state.historic.address;
    }
  },

}

</script>

<style scoped>

</style>
