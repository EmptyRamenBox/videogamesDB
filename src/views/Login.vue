
<template>
  <!-- Login.vue -->
  <!-- This view will be responsible for prompting the user to provide -->
  <!-- credentials to login to the Video Games Database Application. -->
  <!-- -->
  <!-- v-parallax, is a vuetify component that will be utilized to display the background. -->
  <v-parallax src="../assets/background.png" height="800" width="1800" jumbotron>
    <v-row class="mt-10" fluid>
      <!-- Column #1: Spacing -->
      <v-col cols="12" xs="12" sm="3" md="8">
        <!--  -->
      </v-col>
      <!-- Column #2: Content -->
      <!-- Login Card -->
      <v-col cols="12" xs="12" sm="6" md="4">
        <v-card color="teal " outlined min-width="220" max-width="320" min-height="500">
          <v-card-title class="mt-10 ml-8">
            <h5>EmptyRamenBox's</h5>
            <h1>Video Games DB</h1>
          </v-card-title>
          <v-card-text class="white--text text-center">
            <h2 class="mt-12">Enter the Virtual Realm!</h2>
            <h4>Sign in or register with the following methods:</h4>
            <div class="mt-12 justify-center">
              <div id="firebaseui-auth-container"></div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Column #3: Spacing -->
      <v-col cols="12" xs="12" sm="3" md="1">
        <!--  -->
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: "Login",
  mounted() {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: authResult => {
          this.$store.dispatch("setUser", authResult.user);
          this.$store.dispatch("showDrawer");
          this.$router.push("/");
          return false;
        }
      },
      signInOptions: [
        this.$firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        this.$firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    this.$firebaseui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>
