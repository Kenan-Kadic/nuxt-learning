<template>
  <v-container>
    <PropPass :header="headerText"></PropPass>
  </v-container>
</template>

<script>

import PropPass from "~/components/PropPass";

export default {
  name: "propparent",

  components: {PropPass},

  data() {
    return {
      headerText: 'This is the passed text which is located in the Parent but displays in the child component',
    }
    }
}
</script>

<style scoped>

</style>
