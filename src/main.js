import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
// import $ from 'jquery'
// import Jquery from './assets/script/jquery.min.js'
// import Popper from './assets/bootstrap/popper.min.js'
// import Bootstrap from './assets/bootstrap/bootstrap.min.js'

Vue.config.productionTip = false
// Vue.use(Jquery)
// Vue.use(Popper)
// Vue.use(Bootstrap)


new Vue({
  render: h => h(App),
}).$mount('#app')
