<template>
  <div>
    This is a blog
    <v-col cols="12" xs="6" md="6" fluid class="mt-8">
      <v-col cols="12" xs="6" md="3">
        <v-card color="primary" class="m-0 pt-6 pb-2" min-height="200">
          <v-card-title class="justify-center display-3">Blog</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" xs="6" md="9">
        <v-row color="secondary" class="mb-6" justify="center" wrap>
          <v-col column wrap cols="12" xs="6" md="2" lg="6">
            <v-card color="primary" class="m-0 pt-6 pb-2">
              <v-card-title class="justify-center display-3">Blog</v-card-title>
            </v-card>
          </v-col>
          <v-col column wrap cols="12" xs="6" md="2" lg="6">
            <v-card color="primary" class="m-0 pt-6 pb-2">
              <v-card-title class="justify-center display-3">Blog</v-card-title>
            </v-card>
          </v-col>
          <v-col cols="12" xs="3" md="1">
            <!-- Spacing - Row#01 - Col#03 -->
          </v-col>
        </v-row>
      </v-col>

      <!-- Row #02 -->
      <!-- Spacing -->
      <!--  -->
      <v-row justify-center class="mt-10">
        <v-card color="primary" class="m-0 pt-6 pb-2">
          <v-card-title class="justify-center display-3">Blog</v-card-title>
        </v-card>
      </v-row>
      <!-- Row #03 -->
      <!-- ExploreGames Header -->
      <!--  -->
      <v-row justify="space-around" class="title">
        <v-card color="primary" class="m-0 pt-6 pb-2">
          <v-card-title class="justify-center display-3">Blog</v-card-title>
        </v-card>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "Blog"
};
</script>
