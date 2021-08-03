// nodejs服务器
const express = require("express");
const Vue = require("vue");

// 创建express实例和vue实例
const app = express();
// 创建渲染器
const renderer = require("vue-server-renderer").createRenderer();

// 将来用渲染器渲染page可以得到html内容
const page = new Vue({
  data: { title: "开课吧" },
  template: "<div><h1>{{title}}</h1><div>hello, vue ssr!</div></div>",
});

app.get("/", async (req, res) => {
  try {
    const html = await renderer.renderToString(page);
    // eslint-disable-next-line no-console
    console.log(html);
    res.send(html);
  } catch (error) {
    res.status(500).send("服务器内部错误");
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("渲染服务器启动成功");
});
