import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors"; // import Vuetify library for Custom Themes

Vue.use(Vuetify);

// Vuetify 2.0
// Custom Color Scheme
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        // primary: "#0e11ad",
        primary: colors.indigo.accent3,
        secondary: colors.amber.lighten1,
        accent: colors.red.black,
        error: colors.deepOrange.darken3,
        background: colors.grey.darken3
      },
      dark: {}
    }
  }
});

export default vuetify;
