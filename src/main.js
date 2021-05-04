import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import ECharts from 'echarts'

Vue.config.productionTip = false
// Vue 引用 ECharts
Vue.prototype.$echart = ECharts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
