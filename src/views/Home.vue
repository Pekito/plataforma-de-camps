<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" class="d-flex flex-column justify-center">
        <h1 class="text-center">
          Crie grupos com seus amigos e participe de competições agora!
        </h1>
        <v-btn color="success" class="criarConta mt-4" tag="a" to="/login"
          >Criar Conta</v-btn
        >
      </v-col>
      <v-col cols="12" lg="6">
        <v-img
          src="../assets/ilustracoes/undraw_finish_line_katerina_limpitsouni_xy20.png"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.criarConta {
  margin: 0 auto;
}
</style>
