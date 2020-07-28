<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" lg="6" class="d-flex flex-column justify-center">
          <h1 class="text-center">Está afim de competir?</h1>
          <v-img
            src="../../assets/ilustracoes/undraw_speed_test_wxl0.svg"
          ></v-img>
        </v-col>
        <v-col cols="12" lg="6">
          <v-row class="d-flex flex-wrap text-center">
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
                :to="{ name: 'cubo333' }"
              >
                3x3
              </v-btn>
            </v-col>
            <v-col>
              <v-btn color="purple white--text" width="125" height="100">
                4x4
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Competir"
};
</script>

<style scoped></style>
