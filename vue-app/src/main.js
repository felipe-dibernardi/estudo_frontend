// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import Button from './components/Button'
import Card from './components/Card'

Vue.config.productionTip = false

Vue.component('app-button', Button)
Vue.component('app-card', Card)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
