<template>
  <v-parallax src="../assets/background.png" height="800" width="1800" jumbotron>
    <v-container fluid>
      <v-layout row wrap class="-mt-6">
        <v-flex v-for="i in 4" :key="`3${i}`" lg>
          <v-card v-if="i === 4" color="primary" min-width="300" min-height="500">
            <v-card-title class="justify-center">
              <div class="mt-12">
                <h3>EmptyRamenBox's</h3>
                <h1>Video Game</h1>
                <h1>Database</h1>
              </div>
            </v-card-title>
            <v-card-text class="text-center">
              <h2 class="mt-12">Enter the Virtual Realm!</h2>
              <h4>Sign in or register with the following methods:</h4>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  name: "Login"
};
</script>
