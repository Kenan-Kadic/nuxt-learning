<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Signup</h1>
        <v-form label="Name" type="text">
          <v-text-field label="Email" type="email"></v-text-field>
          <v-autocomplete label="Which browser do you use?" :items="browsers"></v-autocomplete>
          <v-file-input label="Attach profile picture"></v-file-input>
          <v-text-field label="Birthday" v-model="birthday" readonly></v-text-field>
          <v-date-picker v-model="birthday"></v-date-picker>
          <v-switch label="I am at least 18 years old"></v-switch>
          <v-checkbox label="Agree to Terms and Conditions"></v-checkbox>
          <v-btn color="primary" type="submit">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Signup",

  data: () => ({
    browsers: ['Chrome', 'Firefox', 'Safari', 'Edge', 'Brave'],
    birthday: ''
  })

}
</script>

<style scoped>

</style>
