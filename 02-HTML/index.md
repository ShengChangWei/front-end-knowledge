<!--
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-02-25 11:29:28
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-02-26 19:24:41
 * @Description: file content
-->
<!-- TOC -->

- [1. 主流浏览器内核及私有属性css前缀](#1-主流浏览器内核及私有属性css前缀)
- [2. 元素的alt和title有什么异同](#2-元素的alt和title有什么异同)
- [3. 页面导入样式时，使用link和@import有什么区别？](#3-页面导入样式时使用link和import有什么区别)
- [4. HTML5 的新特性](#4-html5-的新特性)
- [5. localStorage, sessionStorage, cookie 区别](#5-localstorage-sessionstorage-cookie-区别)
- [6. DOCTYP的作用是什么？严格模式与混杂模式如何区分？它们有何意义？](#6-doctyp的作用是什么严格模式与混杂模式如何区分它们有何意义)
- [7. 简述一下你对HTML语义化的理解？有哪些语义化标签](#7-简述一下你对html语义化的理解有哪些语义化标签)
- [8. 行内元素和块级元素](#8-行内元素和块级元素)
- [9. 请描述一下 cookies，sessionStorage 和 localStorage 的区别？](#9-请描述一下-cookiessessionstorage-和-localstorage-的区别)
- [10. iframe有那些缺点？](#10-iframe有那些缺点)
- [11. canvas与SVG](#11-canvas与svg)
- [12. webSocket如何兼容低浏览器？](#12-websocket如何兼容低浏览器)
- [13. 页面可见性（Page Visibility）API 可以有哪些用途？](#13-页面可见性page-visibilityapi-可以有哪些用途)
- [14. 网页验证码是干嘛的，是为了解决什么安全问题？](#14-网页验证码是干嘛的是为了解决什么安全问题)
- [15. title与h1的区别、b与strong的区别、i与em的区别？](#15-title与h1的区别b与strong的区别i与em的区别)

<!-- /TOC -->

## 1. 主流浏览器内核及私有属性css前缀

|  表头   | 表头  | css前缀 |
|  ----  | ----  | ---- |
| mozilla  | Firefox,flock等 |   -moz |
| webkit  | safari,chrome等 |  -webkit  |
| opera  | opera浏览器 |   -o |
| Trident  | IE浏览器 |  -ms  |

## 2. 元素的alt和title有什么异同

- `alt`作为图片加载失败后替代文字出现
- `title`是图片的解释文字

## 3. 页面导入样式时，使用link和@import有什么区别？

两者都是外部引入`css`的方式，区别如下：

> 从属关系区别

- `link`是`html`标签，不仅可以加载`css`文件，还可以定义`RSS、rel`连接属性等。`@import`是`css`提供的语法规则，只有导入样式表的作用

> 加载顺序区别

加载页面是，`link`标签引入的`css`被同时加载；`@import`引入`css`将在页面加载完毕后被加载
> 兼容性区别

`@import`是`CSS2.1`才有的语法，故只可在`IE5+`才能识别；`link`标签作为`HTML`元素，不存在兼容性问题。
> DOM可控性区别

可以通过`js`操作`DOM`,插入`link`标签来改变样式；由于`DOM`方法是基于文档的，无法使用`@import`的方式插入样式。

## 4. HTML5 的新特性

- 1、语义化标签:header、footer、section、nav、aside、article
- 2、增强型表单：input的多个type(color, date, datetime, email, month, number, range, search, tel, time, url, week)
- 3、新增表单元素：datalist、keygen、output
- 4、新增表单属性：placehoder, required, min和max, step, height 和 width, autofocus, multiple
- 5、音频视频：audio、video
- 6、canvas
- 7、地理定位：
- 8、拖拽：drag
- 9、本地存储：localStorage、sessionStorage
- 10、新事件：onresize、ondrag、onscroll、onmousewheel、onerror、onplay、onpause
- 11、WebSocket

## 5. localStorage, sessionStorage, cookie 区别

## 6. DOCTYP的作用是什么？严格模式与混杂模式如何区分？它们有何意义？

## 7. 简述一下你对HTML语义化的理解？有哪些语义化标签

## 8. 行内元素和块级元素

## 9. 请描述一下 cookies，sessionStorage 和 localStorage 的区别？

## 10. iframe有那些缺点？

## 11. canvas与SVG

## 12. webSocket如何兼容低浏览器？

## 13. 页面可见性（Page Visibility）API 可以有哪些用途？

## 14. 网页验证码是干嘛的，是为了解决什么安全问题？

## 15. title与h1的区别、b与strong的区别、i与em的区别？
