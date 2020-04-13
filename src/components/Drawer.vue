<template>
  <v-navigation-drawer :value="drawer" app clipped>
    <v-list class="dense">
      <v-spacer></v-spacer>
      <v-list-item class="justify-end">
        <!-- Enable this for devices with small viewports... -->
        <v-icon large @click="drawer ? hideDrawer() : drawer">mdi-arrow-collapse-left</v-icon>
      </v-list-item>
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
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import defaultPicture from "../assets/logo.png";

export default {
  name: "Drawer",
  data: () => ({
    defaultPicture
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
