<template>
  <div>
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
            <v-card-title class="justify-center display-3">Profile</v-card-title>
          </v-card>
        </v-col>
        <!-- v-row -->

        <v-col class="ml-4" cols="12" xs="6" sm="8" md="6" lg="8">
          <v-card height="900" color="primary" class="m-0 pt-6 pb-2">
            <v-card-title class="justify-center display-3">Profile Details</v-card-title>
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
