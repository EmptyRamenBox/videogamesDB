<template>
  <v-col cols="12">
    <v-row fluid>
      <!-- Column -->
      <v-col column wrap>
        <!-- Search Bar -->
        <v-card color="primary" min-width="0" class="pt-10" min-height="200">
          <v-card-title class="justify-left">
            <div class="mt-2 ml-2">
              <h1>My Playlist</h1>
              <h5>These are the games I am currently playing.</h5>
            </div>
          </v-card-title>
          <v-card-text>My playlist</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "Playing"
};
</script>
