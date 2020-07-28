<template>
  <div>
    <v-container
      v-if="!eventConfirmed"
      class="d-flex flex-column align-center mt-15"
    >
      <h1 class="text-center mt-5 mb-5">3x3 - Semana 02</h1>
      <v-btn color="warning" @click="eventConfirmed = true" width="500"
        >Deseja confirmar a participação?</v-btn
      >
    </v-container>
    <v-container v-if="eventConfirmed && !alreadyParticipated">
      <div class="d-flex justify-space-between align-center">
        <h1 class="text-center mt-5 mb-5">3x3 - Semana 02</h1>
        <TimerConfig />
      </div>
      <v-row>
        <v-col
          cols="12"
          md="5"
          class="overflow-hidden order-last order-md-first"
        >
          <v-simple-table>
            <thead>
              <tr>
                <th>#</th>
                <th>Tempo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(time, index) in times" :key="index">
                <th>{{ index + 1 }}</th>
                <th>{{ time }}</th>
                <th class="d-flex align-center justify-space-between">
                  <v-btn color="error" small>DNF</v-btn>
                  <v-btn color="warning" small>+2</v-btn>
                  <v-btn color="success" small>OK</v-btn>
                </th>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
        <v-col
          cols="12"
          md="7"
          class="d-flex flex-column justify-center text-center pekiTimer"
        >
          <p class="text-h1 timerText">00:00.00</p>
          <p class="text-h5">Toque para começar</p>
          <p class="body-1">[4/5]</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TimerConfig from "@/components/TimerConfig";
export default {
  name: "Cubo333",
  components: { TimerConfig },
  data() {
    return {
      times: ["00.00", "0:00.00", "0.00", "00:00.00"],
      eventConfirmed: false,
      alreadyParticipated: false
    };
  }
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .timerText {
    font-size: 80px !important;
  }

  .pekiTimer {
    height: 60vh;
  }
}
</style>
