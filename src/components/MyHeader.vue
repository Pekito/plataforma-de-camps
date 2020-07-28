<template>
  <v-app-bar app color="purple" dark>
    <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title @click="$router.push('/')" class="logo"
      >Nome Criativo</v-toolbar-title
    >
  </v-app-bar>
</template>

<script>
export default {
  name: "MyHeader",
  methods: {
    toggleDrawer() {
      this.$store.commit("TOGGLE_DRAWER", true);
    }
  }
};
</script>

<style scoped>
.logo {
  cursor: pointer;
}
</style>
