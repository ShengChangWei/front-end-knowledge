/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-08-04 19:16:02
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-08-12 18:40:33
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

function Animal() {

}


new Vue({
  render: h => h(App),
}).$mount('#app')
