import Vue from 'vue'
import App from './App.vue'
import 'fullpage.js/vendors/scrolloverflow';
import VueFullpage from 'vue-fullpage.js'
import animate from 'animate.css'

Vue.use(animate)



Vue.use(VueFullpage)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
