<template>
  <v-container>
    <PropPass :header="headerText"></PropPass>
  </v-container>
</template>

<script>

import PropPass from "~/components/prop/PropPass";

export default {
  name: "propparent",

  components: {PropPass},

  data() {
    return {
      headerText: 'This is the passed text which is located in the Parent component (a page in pages folder in a subfolder called prop) but displays in the child component (a component in components folder in a subfolder called prop)',
    }
    }
}
</script>

<style scoped>

</style>
