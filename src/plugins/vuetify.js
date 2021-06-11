import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#DAFED8", 
        secondary: "#2FFFF9", 
        accent: "#DAFED8", 
      },
    },
    options: {
      customProperties: true
    }
  },
});
