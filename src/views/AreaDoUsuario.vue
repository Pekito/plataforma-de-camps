<template>
  <div>
    <h1 class="text-center mt-5">Área do Usuário</h1>
    <v-container class="usuarioContainer">
      <v-form ref="form">
        <v-row>
          <v-col cols="12" lg="4">
            <v-img
              src="http://placehold.it/100x100?text=Foto"
              class="width"
            ></v-img>
          </v-col>
          <v-col cols="12" lg="8">
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
          <v-col cols="6">
            <v-btn color="purple white--text" width="100%"
              >WCA Autenticado</v-btn
            >
          </v-col>
          <v-col cols="6">
            <v-btn color="disabled" width="100%">E-mail confirmado</v-btn>
          </v-col>
        </v-row>
        <v-progress-linear
          :active="!usuario.wca"
          indeterminate
          color="purple"
        ></v-progress-linear>
        <v-col cols="12" v-if="usuario.wca">
          <v-list>
            <v-card class="mx-auto" max-width="100%" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">
                    <a :href="usuario.wca.person.url">Visitar Perfil</a>
                  </div>
                  <v-list-item-title class="headline mb-1">{{
                    usuario.wca.person.name
                  }}</v-list-item-title>
                  <v-list-item-subtitle
                    >País:
                    {{ usuario.wca.person.country_iso2 }}</v-list-item-subtitle
                  >
                </v-list-item-content>

                <v-list-item-avatar tile size="100" color="gray">
                  <v-img :src="usuario.wca.person.avatar.thumb_url"></v-img>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </v-list>
        </v-col>
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
        email: "",
        wca: null
      }
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      let response = await fetch(
        "https://www.worldcubeassociation.org/api/v0/persons/2017PIRE01"
      );
      let data = await response.json();
      console.log(data);
      this.usuario.wca = data;
    }
  }
};
</script>

<style scoped>
.usuarioContainer {
  max-width: 600px;
}
</style>
