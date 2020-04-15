<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <NavBar class="secondary--text" app />
    <Drawer />
    <v-content app>
      <v-container fluid class="white--text">
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Drawer from "@/components/Drawer.vue";

export default {
  name: "App",
  components: { NavBar, Drawer },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
