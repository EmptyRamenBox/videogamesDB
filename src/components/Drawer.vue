<template>
  <v-navigation-drawer :value="drawer" app clipped>
    <v-list class="dense">
      <v-spacer></v-spacer>
      <v-list-item class="justify-end">
        <!-- Enable this for devices with small viewports... -->
        <v-btn @click="drawer ? hideDrawer() : drawer">
          <v-icon small>mdi-arrow-collapse-left</v-icon>
          <v-list-item-title>Hide</v-list-item-title>
        </v-btn>
      </v-list-item>
      <div class="d-flex flex-column justify-center align-center mb-4">
        <v-list-item justify="center">
          <v-list-item-avatar size="160" color="red darken-4">
            <img :src="defaultPicture" alt="Profile Pic" />
          </v-list-item-avatar>
        </v-list-item>
      </div>

      <v-list-item justify="center">
        <div class="d-flex flex-column justify-center mb-8">
          <!-- <div class="pt-4"> -->
          <!-- <v-avatar size="128" color="red darken-4"> -->
          <!-- <img :src="defaultPicture" alt="Profile Pic" /> -->
          <!-- </v-avatar> -->
          <!-- </div> -->
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
      { icon: "mdi-trending-up", text: "Explore Games" },
      { icon: "mdi-bookshelf", text: "My Library" },
      { icon: "mdi-star-box-multiple-outline", text: "Wishlist" },
      { icon: "mdi-post-outline", text: "Game Blogs" }
    ]
  }),
  computed: {
    ...mapGetters({
      drawer: "getDrawer"
    })
  },
  methods: {
    ...mapActions(["hideDrawer"])
  }
};
</script>
