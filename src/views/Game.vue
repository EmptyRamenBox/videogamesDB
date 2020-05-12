<template>
  <!-- <v-col cols="12"> -->
  <!-- In ONE row -->
  <!-- Split the row into 2 columns -->
  <!--    One column is 1/4 in width -->
  <!--    The other column in 3/4 in width -->

  <v-col cols="12">
    <v-row rows="5" class="mr-0" align="center" justify="center" fluid>
      <v-col cols="12" xs="7" md="7" lg="8">
        <v-card min-height="600" color="primary" class="m-0 pt-6 pb-2">
          <v-card-title class="justify-center display-3">{{ game.name }}</v-card-title>
          <v-card-text
            justify="center"
            class="text-center justify-center display-1"
            v-if="game.metacritic"
          >Metacritic Score: {{ game.metacritic }}</v-card-text>

          <v-card-text>
            <v-img :src="game.background_image"></v-img>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" xs="5" md="5" lg="4">
        <v-card min-height="600" color="primary" class="m-0 pt-6 pb-2">
          <v-card-text>
            <!-- Release Year -->
            <div>
              <h3>
                Release Date:
                <span>{{ game.released }}</span>
              </h3>
            </div>
            <!-- Systems -->
            <div class="mt-0">
              <span class="font-weight-bold">Platforms:</span>
              <v-chip-group>
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
              </v-chip-group>
            </div>
            <!-- Genre -->
            <div class="mt-2">
              <span class="font-weight-bold mr-2">Genre:</span>
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
            <!-- Game Rating -->
            <div class="mt-2">
              <span class="font-weight-bold mr-2">Game Rating:</span>
              <v-chip label color="amber" class="black--text">
                <span class="title font-weight-bold">{{ game.rating }}</span>
                <span>/ 5</span>
                <!-- {{ genres.find(g => g.id === genre.id).name }} -->
              </v-chip>
            </div>
            <!-- Tags -->
            <div class="mt-2">
              <span class="font-weight-bold mr-2">
                Tags:
                <v-chip-group column>
                  <div v-for="tags in game.tags" :key="tags.id">
                    <v-chip
                      label
                      class="ml-2 mt-2 mr-2"
                      color="tertiary"
                      v-if="tags.language == 'eng'"
                    >
                      {{ tags.name }}
                      <!-- {{ genres.find(g => g.id === genre.id).name }} -->
                    </v-chip>
                  </div>
                </v-chip-group>
              </span>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn justify="center" class="ml-4 mr-4">+ Wishlist</v-btn>
            <v-btn justify="center" class="ml-4 mr-4">+ Library</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-col>

  <!-- </v-col> -->
</template>

<script>
export default {
  name: "Game",
  computed: {
    game() {
      console.log;
      return this.$store.getters.getGame(parseInt(this.$route.params.id));
    }
  }
};
</script>
