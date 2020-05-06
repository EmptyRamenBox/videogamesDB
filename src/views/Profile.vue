<template>
  <div>
    <!-- <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-title>This is the Profile page. Coming soon!</v-card-title>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 2" :key="`6${i}`" xs6>
        <v-card dark color="secondary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 3" :key="`4${i}`" xs4>
        <v-card dark color="primary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 4" :key="`3${i}`" xs3>
        <v-card dark color="secondary">
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 6" :key="`2${i}`" xs2>
        <v-card dark color="primary">
          <v-card-text class="px-0">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 12" :key="`1${i}`" xs1>
        <v-card dark color="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>-->
    <!-- Nested Grid -->

    <!-- Profile Page Layout -->
    <v-col cols="12" class="mt-6">
      <!-- In ONE row -->
      <!-- Split the row into 2 columns -->
      <!--    One column is 1/4 in width -->
      <!--    The other column in 3/4 in width -->

      <!-- v-col -->
      <v-row>
        <v-col class="ml-4" cols="12" xs="6" sm="4" md="4" lg="3">
          <v-card height="900" color="primary" class="m-0 pt-6 pb-2">
            <v-card-title class="justify-center display-3">Home</v-card-title>
          </v-card>
        </v-col>
        <!-- v-row -->

        <v-col class="ml-4" cols="12" xs="6" sm="8" md="6" lg="8">
          <v-card height="900" color="primary" class="m-0 pt-6 pb-2">
            <v-card-title class="justify-center display-3">Home</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created: {}
};
