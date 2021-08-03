/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-07-29 10:43:38
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-07-29 10:54:31
 * @Description: file content
 */

// 入口文件夹

// 创建vue实例

import Vue from 'vue';
import App from './App.vue';
import createRouter from './router';

export default function createApp() {
  const router = createRouter();
  const app = new Vue({
    router,
    render: h => h(App)
  })
  return {
    app,
    router
  };
}