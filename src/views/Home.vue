<template>
  <v-container>
    <!-- Example 1 -->
    <v-col cols="12" height="100%">
      <v-row class="mb-6" justify="center" no-gutters>
        <v-col sm="auto" height="100%">
          <v-card class="pa-2" outlined tile>1 of 3</v-card>
        </v-col>
        <v-col lg="auto" height="100%">
          <v-card class="m-0 p-0" outlined tile
            ><v-card-title class="justify-center display-1"
              >Home</v-card-title
            ></v-card
          >
        </v-col>
        <v-col sm="auto" height="100%">
          <v-card class="pa-2" outlined tile>3 of 3</v-card>
        </v-col>
      </v-row>
      <!-- Example 2 -->
      <v-flex>
        <v-row no-gutters>
          <v-col>
            <v-card class="pa-2" outlined tile>1 of 3</v-card>
          </v-col>
          <v-col md="auto">
            <v-card class="pa-2" outlined tile>Variable width content</v-card>
          </v-col>
          <v-col lg="2">
            <v-card class="pa-2" outlined tile>3 of 3</v-card>
          </v-col>
        </v-row>
      </v-flex>
    </v-col>
    <!-- Sample 1 -->
    <!-- <v-row v-for="n in 3" :key="n" cols="12" sm="6" no-gutters>
      <v-col v-for="n in 12" :key="n" cols="12" xs="6" sm="4" md="3" no-gutters>
        <v-col no-gutters>
          <v-card class="pas-2" outlined="tile" no-gutters>Hello</v-card>
        </v-col>
      </v-col>
    </v-row>-->
    <!-- Sample 2 -->
    <!-- <v-row no-gutters>
      <v-col v-for="n in 12" :key="n" cols="12" sm="4">
        <v-card class="pa-2" outlined tile>One of three columns</v-card>
      </v-col>
    </v-row>-->
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>
