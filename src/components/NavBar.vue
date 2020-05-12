<template>
  <v-app-bar dense clipped-left app color="primary" max-height="45" fluid class="body-1">
    <!-- Left Side -->
    <!--  -->
    <!--  -->
    <!-- Navigation Drawer -->
    <!-- -->
    <!--  -->
    <v-app-bar-nav-icon @click="drawer ? hideDrawer() : showDrawer()">
      <v-icon xs>mdi-gamepad-variant-outline</v-icon>
    </v-app-bar-nav-icon>

    <!-- <v-img
        alt="Video Games Database Logo"
        class="shrink mr-2"
        contain
        src="https://via.placeholder.com/300"
        transition="scale-transition"
        width="40"
    />-->
    <!-- NavBar -->
    <!--  -->
    <!--  -->
    <v-col cols="7" xs="9" sm="10" md="10" class="pl-0 ml-0" no-gutters>
      <v-toolbar-title class="pl-0">
        <router-link to="/">
          <span class="title white--text">Video Games DB</span>
        </router-link>
      </v-toolbar-title>
    </v-col>

    <!-- Right Side -->
    <!--  -->
    <!--  -->

    <!-- Search Button -->
    <v-col cols="8" justify="end" xs="2" sm="2" md="3" lg="2" class="pl-2 ml-4" no-gutters>
      <v-row rows="1">
        <div v-if="user" class="pr-2">
          <v-spacer></v-spacer>
        </div>
        <div v-else class="pr-2">
          <v-btn icon to="/login">
            <v-icon>mdi-login</v-icon>
          </v-btn>
        </div>
        <!-- <div v-else class="pr-2"> -->
        <!-- <v-btn icon to="/login"> -->
        <!-- <v-icon>Logout</v-icon> -->
        <!-- </v-btn> -->
        <!-- </div> -->
        <div class="pr-2">
          <v-btn icon to="/search">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </div>
      </v-row>
    </v-col>
  </v-app-bar>
  <!-- </v-row> -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NavBar",
  computed: {
    user: {
      get() {
        return this.$store.getters.getUser;
      }
    },
    ...mapGetters({
      drawer: "getDrawer"
    })
  },
  methods: {
    ...mapActions(["hideDrawer", "showDrawer"])
  }
};
</script>
