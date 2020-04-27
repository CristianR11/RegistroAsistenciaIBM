import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#03a9f4',
        secondary: '#673ab7',
        accent: '#00bcd4',
        error: '#f44336',
        warning: '#ffc107',
        info: '#2196f3',
        success: '#8bc34a'
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
