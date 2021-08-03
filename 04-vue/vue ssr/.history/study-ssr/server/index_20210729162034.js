/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-07-29 16:04:31
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-07-29 16:20:34
 * @Description: file content
 */

// 引入相关依赖
const express = require('express');
const Vue = require('vue');
const fs = require('fs');

// 创建express实例和vue实例
const app = express();
// 创建渲染器
const { createBundleRenderer } = require('vue-server-renderer');
const serverBundle = require('../dist/server/vue-ssr-server-bundle.json');
const clientManifest = require('../dist/client/vue-ssr-client-manifest.json');
const render = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: fs.readFileSync('../public/index.temp.html', 'utf-8'),
  clientManifest
})

app.use(express.static('../dist/client', { index: false }));

app.get("*", async (req, res) => {
  try {
    const context = {
      url: req.url,
      title: 'study-ssr'
    }
    const html = await render.renderToString(context);
    res.send(html);
  } catch (error) {

  }
})

app.listen(3000, () => {
  console.log('服务器启动')
})