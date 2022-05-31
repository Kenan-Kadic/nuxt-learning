<template>
  <v-container>
    <HistoricContact></HistoricContact>
    <v-divider></v-divider>
    <HistoricInquiry></HistoricInquiry>
  </v-container>
</template>

<script>
import HistoricContact from "~/components/store/HistoricContact";
import HistoricInquiry from "~/components/store/HistoricInquiry";
export default {
  name: "index.vue",
  components: {HistoricInquiry, HistoricContact}
}
</script>

<style scoped>

</style>
