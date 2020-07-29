<template>
  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list dense>
      <v-list-item link tag="a" to="/">
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="!$store.state.logged" link tag="a" to="/login">
        <v-list-item-action>
          <v-icon>mdi-login</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Fazer Login</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-else link tag="a" to="/usuario">
        <v-list-item-action>
          <v-icon>mdi-account</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Área do Usuário</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link tag="a" :to="{ name: 'resultadosdasemana' }">
        <v-list-item-action>
          <v-icon>mdi-trophy</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Resultados da Semana</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link @click="desconectarUsuario" v-if="$store.state.logged">
        <v-list-item-action>
          <v-icon>mdi-account-remove</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Desconectar</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("TOGGLE_DRAWER", val);
      }
    }
  },
  methods: {
    desconectarUsuario() {
      this.$store.commit("MUTATE_LOGGED", false);
      this.$router.push({ path: "/" });
      this.$store.commit("TOGGLE_DRAWER", false);
    }
  }
};
</script>

<style scoped></style>
