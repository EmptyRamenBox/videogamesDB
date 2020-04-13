<template>
  <v-app-bar clipped-left dense app color="primary" class="body-1">
    <!-- Left Side -->
    <!--  -->
    <!--  -->
    <!-- Drawer -->
    <!-- -->
    <!--  -->
    <v-app-bar-nav-icon @click="drawer ? hideDrawer() : showDrawer()">
      <v-icon xs>mdi-gamepad-variant-outline</v-icon>
    </v-app-bar-nav-icon>
    <!-- NavBar -->
    <!--  -->
    <!--  -->

    <!-- <v-img
        alt="Video Games Database Logo"
        class="shrink mr-2"
        contain
        src="https://via.placeholder.com/300"
        transition="scale-transition"
        width="40"
    />-->
    <v-toolbar-title class="pl-0">
      <span class="title">Video Games DB</span>
    </v-toolbar-title>

    <v-spacer />
    <v-spacer />

    <!-- Right Side -->
    <!--  -->
    <!--  -->
    <!-- Search Button -->
    <v-btn>
      Games
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
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
