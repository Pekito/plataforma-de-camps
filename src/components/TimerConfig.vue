<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
        height="50"
        width="150"
      >
        Configurações
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline primary white--text">
        Configurações do Timer
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-checkbox label="Teste" v-model="form.checkbox"></v-checkbox>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">
          Fechar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "TimerConfig",
  data() {
    return {
      dialog: false,
      form: {
        checkbox: true
      }
    };
  }
};
</script>

<style scoped></style>
