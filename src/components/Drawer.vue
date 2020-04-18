<template>
  <!-- VueComponent:  Drawer.vue -->
  <!-- consists of a Vuetify component, that will be used to hold the navigation drawer -->
  <!-- when the user clicks on the navigation drawer icon. -->
  <v-navigation-drawer :value="drawer" app clipped>
    <v-list class="dense mt-2">
      <v-spacer></v-spacer>
      <v-list-item class="justify-end">
        <v-btn class="d-md-none" @click="drawer ? hideDrawer() : drawer">
          <v-icon small>mdi-arrow-collapse-left</v-icon>
          <v-list-item-title>Hide</v-list-item-title>
        </v-btn>
      </v-list-item>
      <!-- User Icon -->
      <!--  -->
      <div class="d-flex flex-column justify-center align-center mb-4">
        <!-- If the user is signed in, -->
        <!-- Redirect the user to his "profile" page -->
        <v-list-item v-if="user" justify="center" to="/profile">
          <!-- For Larger Screens, make the user photo larger -->
          <v-list-item-avatar class="d-none d-md-flex d-md-none" size="160" color="red darken-4">
            <v-img :src="`${user.photoURL}`"></v-img>
          </v-list-item-avatar>
          <!-- For Smaller Screens and Mobile devices, make the user photo smaller -->
          <v-list-item-avatar class="d-xs-none d-sm-flex d-md-none" size="120" color="red darken-4">
            <v-img :src="`${user.photoURL}`"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <!-- If the user is NOT logged in, -->
        <!-- Redirect the user to the login page. -->
        <v-list-item v-else justify="center" to="/login">
          <v-list-item-avatar size="160" color="red darken-4">
            <v-icon sm>mdi-space-invaders</v-icon>
          </v-list-item-avatar>
        </v-list-item>
      </div>
      <!-- If the user is signed in,  -->
      <!-- display his details -->
      <v-list-item v-if="user" justify="center">
        <div class="d-flex flex-column justify-center mb-8">
          <h1 class="font-weight-regular">{{ user.displayName }}</h1>
          <h5 class="font-weight-light mb-4">{{user.email}}</h5>
          <v-btn @click="logOut" color="red darken-3">LogOut</v-btn>
        </div>
      </v-list-item>
      <!-- If the user is NOT logged in, -->
      <!--  then prompt the user to login -->
      <v-list-item v-else justify="center">
        <div class="d-flex flex-column justify-center mb-8">
          <v-btn to="login" color="primary">
            Login
            <v-icon>mdi-login</v-icon>
          </v-btn>
        </div>
      </v-list-item>
      <!-- If the user is signed in -->
      <!--  -->
      <!--  -->
      <!-- NOTE: I need to figure out a way to prevent the user from accessing-->
      <!-- the Library, Wishlist and Game Blogs when he does not have an acct. -->
      <v-list-item v-for="item in items" :key="item.text" :to="item.dest">
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import defaultPicture from "../assets/logo.png";

export default {
  name: "Drawer",
  data: () => ({
    defaultPicture,
    items: [
      { icon: "mdi-trending-up", text: "Explore Games", dest: "/" },
      { icon: "mdi-bookshelf", text: "My Library", dest: "/library" },
      {
        icon: "mdi-star-box-multiple-outline",
        text: "Wishlist",
        dest: "/wishlist"
      },
      { icon: "mdi-post-outline", text: "Game Blogs", dest: "/blog" }
    ]
  }),
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
    logOut() {
      this.$firebase.auth().signOut();
      this.setUser("");
      this.hideDrawer("");
    },
    ...mapActions(["hideDrawer", "setUser"])
  }
};
</script>
