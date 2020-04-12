<template >
  <v-container>
    <!-- Drawer -->
    <!-- -->
    <!--  -->
    <v-navigation-drawer app clipped v-model="drawer">
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.text" link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">FRIENDS</v-subheader>
        <v-list>
          <v-list-item v-for="item in items2" :key="item.text" link>
            <v-list-item-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list>
      </v-list>
    </v-navigation-drawer>
    <!-- NavBar -->
    <!--  -->
    <!--  -->
    <v-app-bar clipped-left dense app color="primary" class="font-italic headline" dark>
      <!-- Left Side -->
      <!--  -->
      <!--  -->

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
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
export default {
  name: "NavBar",
  data: () => ({
    drawer: null,
    items: [
      { icon: "mdi-compass", text: "Explore Games" },
      { icon: "mdi-book-multiple", text: "Your Library" },
      { icon: "mdi-history", text: "History" },
      { icon: "mdi-playlist-star", text: "Wishlist" }
    ],
    items2: [
      { picture: 28, text: "Joseph" },
      { picture: 38, text: "Apple" },
      { picture: 48, text: "Xbox Ahoy" },
      { picture: 58, text: "Nokia" },
      { picture: 78, text: "MKBHD" }
    ]
  })
};
</script>
