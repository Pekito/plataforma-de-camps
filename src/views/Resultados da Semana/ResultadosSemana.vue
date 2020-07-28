<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn color="purple white--text" width="125" height="100">
          2x2
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          color="purple white--text"
          width="125"
          height="100"
          :to="{ name: 'resultadosEvento', params: { evento: '3x3' } }"
        >
          3x3
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ResultadosSemana"
};
</script>

<style scoped></style>
