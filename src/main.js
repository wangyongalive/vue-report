import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './plugins/vcharts'
import ECharts from 'echarts'
import VueECharts from 'vue-echarts' // 引入VueECharts

import './style/index.css' //全局样式组件,要写在VueECharts的后面，这样子可以覆盖它的默认样式
Vue.config.productionTip = false
// Vue 引用 ECharts
Vue.prototype.$echart = ECharts
// register component to use
Vue.component('v-chart', VueECharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
