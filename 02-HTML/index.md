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
- [5. sessionStorage,localStorage,cookie 区别](#5-sessionstoragelocalstoragecookie-区别)
- [6. DOCTYP的作用是什么？严格模式与混杂模式如何区分？它们有何意义？](#6-doctyp的作用是什么严格模式与混杂模式如何区分它们有何意义)
  - [作用](#作用)
  - [如何区分？它们有何意义?](#如何区分它们有何意义)
- [7. 简述一下你对HTML语义化的理解？有哪些语义化标签](#7-简述一下你对html语义化的理解有哪些语义化标签)
- [8. 行内元素和块级元素](#8-行内元素和块级元素)
- [10. iframe有那些优缺点？](#10-iframe有那些优缺点)
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

加载页面时，`link`标签引入的`css`被同时加载；`@import`引入`css`将在页面加载完毕后被加载
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

## 5. sessionStorage,localStorage,cookie 区别

- `cookie`数据始终在同源的`http`请求中携带（即使不需要），即`cookie`在浏览器和服务器间来回传递，`localStorage`和`sessionStorage`不会自动把数据发给服务器，仅在本地保存
- 存储大小限制也不同
  - cookie数据不能超过4k
  - sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大
- 数据有效期不同
  - sessionStorage: 仅在当前浏览器窗口关闭前有效，自然也就不可能持久保存
  - localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；
  - cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭;
- 作用域不同
  - sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；
  - localStorage 在所有同源窗口中都是共享的；
  - cookie也是在所有同源窗口中都是共享的

## 6. DOCTYP的作用是什么？严格模式与混杂模式如何区分？它们有何意义？

### 作用

<!DOCTYPE>声明叫做文件类型定义（DTD），声明的作用为了告诉浏览器该文件的类型。让浏览器解析器知道应该用哪个规范来解析文档。<!DOCTYPE>声明必须在 HTML 文档的第一行，这并不是一个 HTML 标签。

### 如何区分？它们有何意义?

严格模式：又称标准模式，是指浏览器按照 W3C 标准解析代码。

混杂模式：又称怪异模式或兼容模式，是指浏览器用自己的方式解析代码。

如何区分：浏览器解析时到底使用严格模式还是混杂模式，与网页中的 DTD 直接相关。

1、如果文档包含严格的 DOCTYPE ，那么它一般以严格模式呈现。（严格 DTD ——严格模式）
2、包含过渡 DTD 和 URI 的 DOCTYPE ，也以严格模式呈现，但有过渡 DTD 而没有 URI （统一资源标识符，就是声明最后的地址）会导致页面以混杂模式呈现。（有 URI 的过渡 DTD ——严格模式；没有 URI 的过渡 DTD ——混杂模式）
3、DOCTYPE 不存在或形式不正确会导致文档以混杂模式呈现。（DTD不存在或者格式不正确——混杂模式）
4、HTML5 没有 DTD ，因此也就没有严格模式与混杂模式的区别，HTML5 有相对宽松的语法，实现时，已经尽可能大的实现了向后兼容。（ HTML5 没有严格和混杂之分）

意义：严格模式与混杂模式存在的意义与其来源密切相关，如果说只存在严格模式，那么许多旧网站必然受到影响，如果只存在混杂模式，那么会回到当时浏览器大战时的混乱，每个浏览器都有自己的解析模式。

## 7. 简述一下你对HTML语义化的理解？有哪些语义化标签

- 为了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构
- 用户体验：例如title、alt用于解释名词
- 有利于SEO：利于被搜索引擎收录，更便于搜索引擎的爬虫程序来识别
- 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页
- 便于项目的开发及维护，使HTML代码更具有可读性

## 8. 行内元素和块级元素

HTML4中，元素被分成两大类：inline （内联元素）与 block （块级元素）。

- 格式上，默认情况下，行内元素不会以新行开始，而块级元素会新起一行。
- 内容上，默认情况下，行内元素只能包含文本和其他行内元素。而块级元素可以包含行内元素和其他块级元素。
- 行内元素与块级元素属性的不同，主要是盒模型属性上：行内元素设置 width 无效，height 无效（可以设置 line-height），设置 margin 和 padding 的上下不会对其他元素产生影响。
- 常见的行内元素有 a b span img strong sub sup button input label select textarea
- 常见的块级元素有  div p ul ol li dl dt dd h1 h2 h3 h4 h5 h6

## 10. iframe有那些优缺点？

- iframe能够原封不动的把嵌入的网页展现出来。
- 如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷。
- 网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用。
- 如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决。

## 11. canvas与SVG

- canvas与svg都是可以在浏览器上创建图形
- HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图像。画布是一个矩形区域，您可以控制其每一像素。canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像、动画的方法
- canvas绘制位图,绘制出来的每一个图形的元素都是独立的DOM节点，能够方便的绑定事件或用来修改。canvas复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）。canvas输出的是一整幅画布，就像一张图片一样，放大会失真。canvas不适合游戏应用。
- svg输出的图形是矢量图形，后期可以修改参数来自由放大缩小，SVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失。svg最适合图像密集型的游戏，其中的许多对象会被频繁重绘

## 12. webSocket如何兼容低浏览器？

- Adobe Flash Socket ActiveX HTMLFile (IE) 基于 multipart 编码发送 XHR 基于长轮询的 XHR
- 引用WebSocket.js这个文件来兼容低版本浏览器。

## 13. 页面可见性（Page Visibility）API 可以有哪些用途？

* 通过`visibility` `state`的值得检测页面当前是否可见，以及打开网页的时间。
* 在页面被切换到其他后台进程时，自动暂停音乐或视频的播放。

## 14. 网页验证码是干嘛的，是为了解决什么安全问题？

* 区分用户是计算机还是人的程序;
* 可以防止恶意破解密码、刷票、论坛灌水；

## 15. title与h1的区别、b与strong的区别、i与em的区别？

`title`属性没有明确意义，只表示标题；h1表示层次明确的标题，对页面信息的抓取也有很大的影响
`strong`标明重点内容，语气加强含义；b是无意义的视觉表示
`em`表示强调文本；i是斜体，是无意义的视觉表示
视觉样式标签：`b i u s`
语义样式标签：`strong em ins del code`
