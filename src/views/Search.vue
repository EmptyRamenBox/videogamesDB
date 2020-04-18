<template>
  <!-- Search.vue -->
  <!-- This view will allows users to see the Search page, which involves-->
  <!-- the user interacting with the API to look for a video game in the -->
  <!-- databse. -->
  <!--  -->
  <!-- The entire Search page is constrained to the Vuetify grid of 12 rows  -->
  <v-col class="mt-0" cols="12">
    <!-- Row #01 -->
    <v-row fluid>
      <!-- Column -->
      <v-col column wrap>
        <!-- Search Bar -->
        <v-card color="primary" min-width="0" class="pt-10" min-height="200">
          <v-card-title class="justify-left">
            <div class="mt-2 ml-2">
              <h1>Search</h1>
              <h5>Let's Find a Game!</h5>
            </div>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="searchItem"
              background-color="white"
              class="form-input"
              type="text"
              label="Search a video game, example 'Donkey Kong'"
              single-line
              filled
              light
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Row #02 -->
    <!-- Spacing -->
    <!--  -->
    <v-row justify-center class="mt-10"></v-row>
    <!-- Row #03 -->
    <!-- Spacing -->
    <!--  -->
    <v-row
      v-if="notFound"
      justify="space-around"
      class="title"
    >Sorry buddy, but we could not find {{ searchItem }}</v-row>

    <!-- Row #04 -->
    <!-- Search Results:  GameCards -->
    <!--  -->
    <v-row v-else rows="1" justify-center class="mt-10">
      <v-col v-for="game in games" :key="game.id" cols="12" xs="12" sm="6" md="3">
        <GameCard :game="game" />
        <!-- This is a game card -->
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import GameCard from "@/components/GameCard.vue";

export default {
  name: "Search",

  components: {
    GameCard
  },
  // Vuetify v-text-field,
  // does not play nice with binding the ":value" to vuex directly.
  // I decided to use v-model directly, with the computed properties running
  // like this.
  //
  // Reasoning: I really like the v-text-field in both css and html, and
  // I was really hesistant to include a simple <input /> field,
  // because it would have thrown off the css of the Search page.
  computed: {
    // searchItem
    // performs 2-way binding to from the searchItem to store, and vice versa
    searchItem: {
      get() {
        return this.$store.getters.getSearch;
      },
      set(value) {
        this.$store.dispatch("newSearchAction", value);
      }
    },
    games: {
      get() {
        return this.$store.getters.getGames;
      },
      set(value) {
        return this.$store.dispatch("setGames", value);
      }
    },
    notFound() {
      return this.$store.getters.getNotFound;
    }
  },
  // As soon as the page is rendered,
  //    - clear the Games array
  //    - clear the search bar
  created() {
    this.searchItem = "";
    this.games = [];
  }
  // Soon to be deprecated --  needs further testing
  // methods: {
  //   newSearchAction(event) {
  //     this.$store.dispatch("newSearchAction", event.target.value);
  //   }
  // }
};
</script>
