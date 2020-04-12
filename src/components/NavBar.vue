<template>
  <v-container>
    <v-app-bar
      clipped-left
      dense
      app
      color="primary"
      class="font-italic headline"
      dark
    >
      <!-- Left Side -->
      <!--  -->
      <!--  -->

      <!-- Drawer -->
      <!-- -->
      <!--  -->
      <v-app-bar-nav-icon @click="drawer ? hideDrawer() : showDrawer()" />

      <!-- NavBar -->
      <!--  -->
      <!--  -->
      <v-icon>mdi-gamepad-variant-outline</v-icon>
      <!-- <v-img
        alt="Video Games Database Logo"
        class="shrink mr-2"
        contain
        src="https://via.placeholder.com/300"
        transition="scale-transition"
        width="40"
      />-->
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Video Games DB</span>
      </v-toolbar-title>

      <v-spacer />
      <v-spacer />
      <v-spacer />

      <!-- Right Side -->
      <!--  -->
      <!--  -->
      <!-- Search Bar -->
      <v-row align="center" style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="mdi-magnify"
          color="white"
          hide-details
        />
      </v-row>
      <!-- User Account -->
      <!-- <v-btn class="primary--text" color="secondary">
        <span>User Account</span>
      </v-btn>-->
    </v-app-bar>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters({
      drawer: "getDrawer"
    })
  },
  methods: {
    ...mapActions(["hideDrawer", "showDrawer"])
  }
};
</script>
