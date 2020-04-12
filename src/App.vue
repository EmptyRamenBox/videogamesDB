<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <NavBar class="secondary--text" />
    <v-content class="white--text">
      <h1>Working on Web App</h1>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
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
