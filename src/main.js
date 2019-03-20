import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bulma from 'bulma'
import lodash from 'lodash'
import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  router,
  bulma,
  lodash,
  render: h => h(App)
}).$mount('#app')