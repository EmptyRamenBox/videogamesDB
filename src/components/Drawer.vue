<template>
  <v-navigation-drawer :value="drawer" app clipped>
    <v-list class="dense">
      <v-list-item justify="center">
        <div class="d-flex flex-column justify-center mb-8">
          <div class="pt-4">
            <v-avatar size="128" color="red darken-4">
              <img :src="defaultPicture" alt="Profile Pic" />
            </v-avatar>
          </div>
          <h1 class="font-weight-regular">Name</h1>
          <h5 class="font-weight-light mb-4">email</h5>
          <v-btn color="red darken-3">LogOut</v-btn>
        </div>
      </v-list-item>
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
            <img
              :src="
                `https://randomuser.me/api/portraits/men/${item.picture}.jpg`
              "
              alt
            />
          </v-list-item-avatar>
          <v-list-item-title v-text="item.text" />
        </v-list-item>
      </v-list>
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
  }),
  computed: {
    ...mapGetters({
      drawer: "getDrawer"
    })
  },
  ...mapActions(["hideDrawer"])
};
</script>
