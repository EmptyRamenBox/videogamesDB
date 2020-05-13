<template>
  <!-- Home.vue -->
  <!-- This view will allows users to see the home page, which involves-->
  <!-- the ExploreGames section, where users can explore new games randomly -->
  <!-- brought in from using API.-->
  <!--  -->
  <!-- The entire Home page is constrained to the Vuetify grid of 12 rows  -->
  <v-col cols="12" fluid class="mt-8">
    <!-- Row #01 -->
    <!-- Title -->
    <!--  -->
    <v-parallax
      color="rgba(255,0,0, 0.8)"
      src="../assets/home.png"
      height="300"
      width="1200"
      jumbotron
    >
      <v-row class="mb-6" justify="center" wrap>
        <v-col cols="12" xs="3" md="1">
          <!-- Spacing - Row#01 - Col#01 -->
        </v-col>
        <v-col column wrap cols="12" xs="6" md="9" lg="6">
          <v-card color="primary" class="m-0 pt-6 pb-2">
            <v-card-title class="justify-center display-3">Home</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" xs="3" md="1">
          <!-- Spacing - Row#01 - Col#03 -->
        </v-col>
      </v-row>
      <!-- Row #02 -->
      <!-- Spacing -->
      <!--  -->
      <v-row justify-center class="mt-10"></v-row>
      <!-- Row #03 -->
      <!-- ExploreGames Header -->
      <!--  -->
      <v-row justify="space-around" class="title">
        <h2>Explore New Games</h2>
      </v-row>
    </v-parallax>

    <!-- Row #04 -->
    <!-- ExploreGames GameCards -->
    <!--  -->
    <v-row rows="1" justify-center class="mt-10">
      <v-col v-for="game in games" :key="game.id" cols="12" xs="12" sm="6" md="3">
        <GameCard :game="game" />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import GameCard from "@/components/GameCard.vue";

export default {
  name: "Home",
  components: {
    GameCard
  },
  // As soon as the page is created,
  // the Home.vue will call the following functions..
  created() {
    this.$store.dispatch("getGamesForHome", []);
    // this.games.get;
  },
  computed: {
    games: {
      get() {
        return this.$store.getters.getGames;
      },
      set(value) {
        this.$store.dispatch("setGames", value);
      }
    }
  },
  methods: {}
};
</script>
