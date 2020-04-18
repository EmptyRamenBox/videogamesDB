<template>
  <!-- VueComponent:  GameCard.vue -->
  <!-- is a custom made vue component, that will be responsible for  -->
  <!-- summarizing game data for display in the Search page and  -->
  <!-- Explore/Home pages. -->
  <!-- eslint-disable-next-line prettier/prettier -->
  <v-card color="secondary" class="mx-auto" min-height="420" max-width="380">
    <!-- Game Cover -->
    <!--  -->
    <v-img
      v-if="`!${game.background_image}`"
      color="primary"
      fill
      class="white--text align-end"
      gradient="to top , rgba(10,10,80,.9), rgba(240,240,240,.10)"
      height="200"
      :src="`${game.background_image}`"
    >
      <!-- Game Title -->
      <v-card-title class="display-1 font-weight-light">{{
        game.name
      }}</v-card-title>
    </v-img>
    <!-- Game Description -->
    <v-card-text class="text--primary subtitle-1">
      <!-- Release Year -->
      <div>
        <h3>
          Release Date:
          <span>{{ game.released }}</span>
        </h3>
      </div>
      <!-- Publisher: Looks like the API can't release this... -->
      <!-- <div class="mt-2 font-weight-bold ">
        Developers:
        <span>{{ game.developers }}</span>
      </div> -->
      <!-- Developer -->
      <!-- <div class="mt-0">
        Developer:
        <span></span>
      </div>-->
      <!-- Systems -->
      <div class="mt-0  ">
        <span class="font-weight-bold">Platforms:</span>
        <v-chip
          label
          class="ml-2 mt-2"
          color="red"
          v-for="platform in game.platforms"
          :key="platform.id"
        >
          {{ platform.platform.name }}
          <!-- {{ platforms.find(p => p.id === platform.platform.id).name }} -->
        </v-chip>
      </div>
      <!-- Genre -->
      <div class="mt-2">
        <span class="font-weight-bold mr-2">Genre: </span>
        <v-chip
          label
          class="ml-2 mt-2 mr-2"
          color="teal"
          v-for="genre in game.genres"
          :key="genre.id"
        >
          {{ genre.name }}
          <!-- {{ genres.find(g => g.id === genre.id).name }} -->
        </v-chip>
      </div>
      <div class="mt-2">
        <span class="font-weight-bold mr-2">Game Rating: </span>
        <v-chip label color="amber" class="black--text">
          <span class="title font-weight-bold">{{ game.rating }}</span
          ><span> / 5</span>
          <!-- {{ genres.find(g => g.id === genre.id).name }} -->
        </v-chip>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  // 1. Props
  props: {
    game: {
      type: Object,
      default: () => {},
    },
  },
  // 2. Data elements
  data() {
    return {
      // genres: []
      // platforms: []
    };
  },
  // 3. Created
  created() {
    // this.getGameGenres();
    // this.getGamePlatforms();
  },
  // 4. Methods
  methods: {
    // async getGameGenres() {
    //   const genres = await this.$axios("genres");
    //   this.genres = genres.data?.results;
    //   console.log(this.genres);
    // }
    // async getGamePlatforms() {
    //   const platforms = await this.$axios("platforms");
    //   this.platforms = platforms.data?.results;
    //   console.log(this.platforms);
    // }
  },
};
</script>
