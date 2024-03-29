<!--
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-07-23 09:49:57
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-07-29 13:33:40
 * @Description: file content
-->

# 1. Vue SSR服务器端渲染

## 1.1. 什么是服务端渲染（SSR）

SSR（Server-Side Rendering）将平时写的组件，页面通过服务器生成html字符串，再发送到浏览器，最后将这些静态标记"激活"为客户端上完全可交互的应用程序

## 1.2. 为什么使用服务端渲染（SSR）

优点：

* 更好的 SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。

* 更快的内容到达时间 (time-to-content)，特别是对于缓慢的网络情况或运行缓慢的设备

缺点：

* 开发条件所限。浏览器特定的代码，只能在某些生命周期钩子函数 (lifecycle hook) 中使用；一些外部扩展库 (external library) 可能需要特殊处理，才能在服务器渲染应用程序中运行。
* 涉及构建设置和部署的更多要求。与可以部署在任何静态文件服务器上的完全静态单页面应用程序 (SPA) 不同，服务器渲染应用程序，需要处于 Node.js server 运行环境。

* 更多的服务器端负载。在 Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的 server 更加大量占用 CPU 资源 (CPU-intensive - CPU 密集)，因此如果你预料在高流量环境 (high traffic) 下使用，请准备相应的服务器负载，并明智地采用缓存策略。

## 创建ssr项目

### 安装依赖

```shell
npm init -y
```

## 1.4. 集成路由及代码分割

## 1.5. 集成VueSSR和Vuex实现数据同步

## 1.6. 学习地址：

## 1.7. 参考资料：

[Vue SSR 指南](https://ssr.vuejs.org/zh/)

[手把手教你打造Vue SSR](https://www.bilibili.com/video/av71527835/)


