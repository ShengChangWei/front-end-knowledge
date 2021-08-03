/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-07-29 11:03:51
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-07-29 11:05:07
 * @Description: file content
 */

import createApp from "./app";

// 挂载激活app
const { app, router } = createApp();
router.onReady(() => {
  app.$mount('#app')
})