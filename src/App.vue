<template>
  <v-app id="inspire">
    <NavigationDrawer />
    <MyHeader />
    <v-main>
      <transition mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <MyFooter />
  </v-app>
</template>

<script>
import NavigationDrawer from "@/components/NavigationDrawer";
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";
export default {
  name: "App",

  components: { MyFooter, MyHeader, NavigationDrawer },

  data: () => ({})
};
</script>

<style>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translate3d(0, -20px, 0);
}
.v-leave-to {
  transform: translate3d(0, 20px, 0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
</style>
