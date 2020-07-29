<template>
  <v-container class="d-flex flex-column text-center mt-10 formContainer">
    <h1 class="mb-5">Seja bem vindo!</h1>
    <v-btn @click="realizarLogin" large class="mb-5" color="amber white--text"
      >Login via Google</v-btn
    >
    <v-btn @click="realizarLogin" large color="indigo white--text"
      >Login via Facebook</v-btn
    >
  </v-container>
</template>

<script>
export default {
  name: "Login",
  methods: {
    realizarLogin() {
      this.$store.commit("MUTATE_LOGGED", true);
      this.$router.push({ name: "areaDoUsuario" });
    }
  }
};
</script>

<style scoped>
.formContainer {
  max-width: 400px;
}
.loginButton {
  max-width: 200px;
  margin: 0 auto;
}
</style>
