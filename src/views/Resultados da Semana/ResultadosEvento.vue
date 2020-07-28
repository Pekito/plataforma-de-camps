<template>
  <v-container>
    <h1 class="text-center mb-5">
      Resultados da Semana - {{ $route.params.evento }}
    </h1>
    <v-simple-table fixed-header>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>01</th>
          <th>02</th>
          <th>03</th>
          <th>04</th>
          <th>05</th>
          <th>Média</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>01</th>
          <th>Pekito</th>
          <th>(13.63)</th>
          <th>11.97</th>
          <th>(9.30)</th>
          <th>10.59</th>
          <th>11.13</th>
          <th>11.23</th>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "ResultadosEvento"
};
</script>

<style scoped></style>
