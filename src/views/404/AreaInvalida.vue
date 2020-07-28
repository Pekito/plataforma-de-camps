<template>
  <v-container class="mt-10 text-center">
    <v-row>
      <v-col cols="6">
        <v-img src="@/assets/ilustracoes/undraw_lost_bqr2.svg"></v-img>
      </v-col>
      <v-col cols="6">
        <h1>Erro 404</h1>
        <p>Página não encontrada</p>
        <v-btn color="success" class="criarConta mt-4" tag="a" to="/"
          >Voltar para o início</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AreaInvalida"
};
</script>

<style scoped></style>
