<!--
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-07-26 18:45:25
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-07-28 19:19:31
 * @Description: file content
-->


# 1. Vue组件封装及发布npm

## 1.1. 确定当前vue-cli版本或下载

```shell
npm install -g @vue/cli
# OR
yarn global add @vue/cli

vue --version
```

## 1.2. 使用vuecli3创建项目

*不需要的依赖就不要下载了，尽量减少包的体积

```shell
vue create study-npm-test
```

## 1.3. 修改目录，开发组件前的准备

 * 把src目录改为examples作为查看组件的演示目录（这哥目录不修改也是可以的），新建packages目录作为组件编写的目录。
* 在项目根目录下新建vue.config.js并添加如下修改 src 目录 为 examples 目录

```js
module.exports = {
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry:'examples/main.js',
      template:'public/index.html',
      filename:'index.html'
    }
  }
}
```

## 1.4. 编写组件

* 在`packages`文件夹下建如下文件

```shell
packages
  |-- study-npm-test
    |-- src
      |-- index.vue
    |-- index.js
  |-- index.js
```

* 在`packages/study-npm-test/src/index.vue`封装自己的功能

```Vue
<template>
  <div>这是study-npm-test</div>
</template>
<script>
export default {
  name: 'study-npm-test', // name必须写study-npm-test或studyNpmTest
};
</script>

```

* 在`packages/study-npm-test/src/index.js`导出组件

```js
// 导出组件必须声明name， 驼峰命名
import studyNpmTest from './src/index.vue'
 
// 为组件提供 install 安装方法，供按需引入
studyNpmTest.install = function (Vue) {
  Vue.component(studyNpmTest.name, studyNpmTest)
}
// 默认导出组件
export default studyNpmTest
```

* 在`packages/index.js` 整合所有组件并导出

```js
// 导入组件
import studyNpmTest from "./study-npm-test";

// 多个组件提前整合
const components = [
  studyNpmTest
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install['installed']) return;
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 切记导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 导出的组件名
  studyNpmTest
}
```

## 1.5. 测试组件

* 在`examples/main.js`引入组件并挂载到全局，当然也可以按需引入

```js
// 使用的是vue3
import { createApp } from 'vue'
import App from './App.vue'
import studyNpmTest from '../packages/index'
const app = createApp(App); 
app.use(studyNpmTest)
app.mount('#app')
```

* 在`examples/App.vue`测试

```Vue
<template>
  <div>
    <study-npm-test></study-npm-test>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
```

## 1.6. 编译组件

* 在根目录下新建`.npmignore`文件

```shell
.DS_Store
node_modules/
examples/
packages/
public/
vue.config.js
babel.config.js
*.map
*.html
 
# local env files
.env.local
.env.*.local
 
# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
 
# Editor directories and files
.history
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw*
```

* 配置`package.json`

```json
{
  "name": "study-npm-test",
  "version": "0.1.0",
  "author": "shengchangwei",
  "description": "study-npm-test",
  "main": "lib/study-npm-test.umd.min.js",
  "keyword": "vue study test",
  "license": "MIT",
  "private": false,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "lib": "vue-cli-service build --target lib --name study-npm-test --dest lib packages/index.js"
  },
  ...
}
```

* 执行编译

```shell
npm run lib
```
编译后可以看到如下

![1627300636(1).jpg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fb96021b3e3b4edeb27163119bb028ee~tplv-k3u1fbpfcp-watermark.image)


## 1.7. 发布组件

* 注册npm账号并登录,镜像是npm镜像

```shell
npm configset registry http://registry.npmjs.org
```

* 在根目录下登录npm，如果登录无需再登录

```shell
npm login
```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6aa9312b4bd44a5d8d35c0c2129459b3~tplv-k3u1fbpfcp-watermark.image)

* 执行发布命令

```shell
npm publish
```

一般这个时候组件就发布成功了，但我不是一般人，在发布的时候遇到如下问题

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf88ba3cf3b34e218385af5c25966dd6~tplv-k3u1fbpfcp-watermark.image)

发现是`npm`上已存在相同的组件名，修改组件名称,直接修改即可，名称必须遵循规则
![https://docs.npmjs.com/files/package.json #name](https://docs.npmjs.com/files/package.json #name)

* 为避免包名重复我们在命名一个组件时，可以提前在npm上搜索是否有相同的组件名

```json
{
  "name": "e-study-npm-test",
  "version": "0.1.0",
  "author": "shengchangwei",
  "description": "e-study-npm-test",
  "main": "lib/e-study-npm-test.umd.min.js",
  "keyword": "vue study test",
  "license": "MIT",
  "private": false,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "lib": "vue-cli-service build --target lib --name e-study-npm-test --dest lib packages/index.js"
  },
  ...
}
```

## 1.8. tips

* 常用命令

```shell
npm adduser 提示输入账号，密码和邮箱，然后将提示创建成功
npm login  登录
npm version <update_type>  update_type为patch, minor, or major其中之一，分别表示补丁，小改，大改
npm pulish 发布
npm unpublish e-study-npm-test --force
```

