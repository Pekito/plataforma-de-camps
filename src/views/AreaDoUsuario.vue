<template>
  <div>
    <h1 class="text-center mt-5">Área do Usuário</h1>
    <v-container class="usuarioContainer">
      <v-form ref="form">
        <v-row>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="usuario.name"
              label="Nome"
              required
            ></v-text-field>
            <v-text-field
              v-model="usuario.email"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
            <h2 class="text-center">Integrações</h2>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AreaDoUsuario",
  data() {
    return {
      usuario: {
        name: "",
        email: ""
      }
    };
  }
};
</script>

<style scoped>
.usuarioContainer {
  width: 600px;
}
</style>
