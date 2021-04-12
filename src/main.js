import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps';
import 'fullpage.js/vendors/scrolloverflow';
import VueFullpage from 'vue-fullpage.js'
import animate from 'animate.css'

Vue.use(animate)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCqgIFqTcK-S6CmMBuNJXRuOWEM8Ii1BtU',
    libraries: ['geometry']
  }
});

Vue.use(VueFullpage)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
