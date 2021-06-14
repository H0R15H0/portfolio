import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#EDEDED", 
        secondary: "#B8B6B6", 
        accent: "#068985",
        secondary_accent: "#AD3F03",
      },
    },
    options: {
      customProperties: true
    }
  },
});
