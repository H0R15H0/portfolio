import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#DAFED8", 
        secondary: "#2FFFF9", 
        accent: "#D9D9D9",
        accent_lighten: "#E2E2E5",
      },
    },
    options: {
      customProperties: true
    }
  },
});
