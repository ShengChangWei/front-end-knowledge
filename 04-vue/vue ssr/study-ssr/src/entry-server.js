/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-07-29 11:11:53
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-07-29 11:24:28
 * @Description: file content
 */
// 渲染首屏
import createApp from "./app"
export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();
    // 进入首屏
    router.push(context.url);
    router.onReady(() => {
      resolve(app)
    }, reject)
  })
}