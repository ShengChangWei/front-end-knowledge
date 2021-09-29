import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

function Animal() {

}


new Vue({
  render: h => h(App),
}).$mount('#app')
