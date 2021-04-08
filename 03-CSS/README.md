<!--
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-02-26 19:25:26
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-02-26 19:40:57
 * @Description: file content
-->
<!-- TOC -->

- [1. CSS3新特性](#1-css3新特性)
- [2. CSS 盒模型](#2-css-盒模型)
- [3. 设置一个元素的背景颜色，背景颜色会填充哪些区域](#3-设置一个元素的背景颜色背景颜色会填充哪些区域)
- [4. margin/padding 设置百分比是相对谁的](#4-marginpadding-设置百分比是相对谁的)
- [5. link和@import的区别](#5-link和import的区别)
- [6. CSS 选择器的解析规则](#6-css-选择器的解析规则)
- [7. CSS 选择优先级](#7-css-选择优先级)
- [8. ::before和::after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用](#8-before和after中双冒号和单冒号有什么区别解释一下这2个伪元素的作用)
- [9. 伪类与伪元素的区别](#9-伪类与伪元素的区别)
- [10. CSS 中哪些属性可以继承](#10-css-中哪些属性可以继承)
- [11. 关于伪类LVHA的解释](#11-关于伪类lvha的解释)
- [12. CSS 清除浮动的方式](#12-css-清除浮动的方式)
- [13. 清除浮动的原理](#13-清除浮动的原理)
- [14. BFC的概念, 哪些元素可以触发BFC](#14-bfc的概念-哪些元素可以触发bfc)
- [15. 脱离文档流的方式](#15-脱离文档流的方式)
- [16. position 的值定位原点](#16-position-的值定位原点)
- [17. display 有哪些值？说明他们的作用](#17-display-有哪些值说明他们的作用)
- [18. flex 的属性有哪些](#18-flex-的属性有哪些)
- [19. visibility: hidden, opacity: 0，display: none 区别](#19-visibility-hidden-opacity-0display-none-区别)
- [20. 了解重绘和重排吗，知道怎么去减少重绘和重排吗，让文档脱离文档流有哪些方法](#20-了解重绘和重排吗知道怎么去减少重绘和重排吗让文档脱离文档流有哪些方法)
- [21. z-index 是干什么用的？默认值是什么？与 z-index: 0 的区别](#21-z-index-是干什么用的默认值是什么与-z-index-0-的区别)
- [22. vw 和 vh 的概念](#22-vw-和-vh-的概念)
- [23. 经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用 hack 的技巧](#23-经常遇到的浏览器的兼容性有哪些原因解决方法是什么常用-hack-的技巧)
- [24. 简单介绍使用图片 base64 编码的优点和缺点](#24-简单介绍使用图片-base64-编码的优点和缺点)
- [25. 如果需要手动写动画，你认为最小时间间隔是多久，为什么](#25-如果需要手动写动画你认为最小时间间隔是多久为什么)
- [26. 画一条 0.5px 的线](#26-画一条-05px-的线)
- [27. transition 和 animation 的区别](#27-transition-和-animation-的区别)
- [28. 如何实现单行／多行文本溢出的省略（...）](#28-如何实现单行／多行文本溢出的省略)
- [29. 常见的元素隐藏方式](#29-常见的元素隐藏方式)
- [30. CSS3 @font-face 有用过吗](#30-css3-font-face-有用过吗)
- [31. CSS 实现隔行变色](#31-css-实现隔行变色)
- [32. 一个满屏品字布局如何设计](#32-一个满屏品字布局如何设计)
- [33. CSS 画三角形](#33-css-画三角形)
- [34. CSS 画扇形](#34-css-画扇形)
- [35. CSS 画正方体](#35-css-画正方体)
- [36. CSS 实现一个硬币旋转的效果](#36-css-实现一个硬币旋转的效果)
- [37. CSS 实现垂直居中](#37-css-实现垂直居中)
- [38. CSS 实现两列固定，中间自适应的布局](#38-css-实现两列固定中间自适应的布局)
- [39. 实现自适应九宫格](#39-实现自适应九宫格)
- [40. 屏幕里面内容未占满的时候footer固定在屏幕可视区域的底部。占满的时候显示在网页的最底端](#40-屏幕里面内容未占满的时候footer固定在屏幕可视区域的底部占满的时候显示在网页的最底端)

<!-- /TOC -->
## 1. CSS3新特性

- 伪类和伪元素选择器： `:first-child,:last-child,:nth-child(1),:link,::before, ::after`
- 背景、边框和颜色透明度：`background-size, background-origin, border-radius box-shadow, border-image rgba`
- 文字效果：`text-shadow, word-wrap`
- 2D 转换和 3D 转换：`transform, translate(), rotate(), scale(), skew(), matrix() rotateX(), rotateY(), perspective`
- 动画、过渡：`animation, transition`
- 多列：`column-count, column-gap, column-rule`
- 用户界面：`resize, box-sizing, outline-offset`

## 2. CSS 盒模型

盒模型总共包括4个部分：

- `content`：内容，容纳着元素的”真实“内容，例如文本，图像或是视频播放器
- `padding`：内边距
- `border`：边框
- `margin`：外边距

两种盒模型：W3C盒模型、IE盒模型
区别：

- `W3C`盒模型中，通过`CSS`样式设置的`width`的大小只是`content`的大小
- IE盒模型中，通过`CSS`样式设置的`width`的大小是`content + padding + border`

## 3. 设置一个元素的背景颜色，背景颜色会填充哪些区域

`border + padding + content`

## 4. margin/padding 设置百分比是相对谁的

`margin/padding`设置百分比都是相对于父盒子的宽度(`width`属性)
先来看一个案例：假设一个div，宽400px，高200px，他有个子div的margin:10%，你来算下他的margin 的 top, right, bottom, left 是多少？

```css
.outer {
    width: 400px;
    height: 200px;
    background-color: red;
    position: relative;
}
.inner {
    width: 100px;
    height: 100px;
    background-color: green;
    position: absolute;
    margin: 10%;
}
```

```html
<div class="outer">
    <div class="inner"></div>
</div> 
```

## 5. link和@import的区别

- `link`是`html`标签，不仅可以加载`css`文件，还可以定义`RSS、rel`连接属性等。`@import`是`css`提供的语法规则，只有导入样式表的作用
- 加载页面时，`link`标签引入的`css`被同时加载；`@import`引入`css`将在页面加载完毕后被加载
- `@import`是`CSS2.1`才有的语法，故只可在`IE5+`才能识别；`link`标签作为`HTML`元素，不存在兼容性问题。
- 可以通过`js`操作`DOM`,插入`link`标签来改变样式；由于`DOM`方法是基于文档的，无法使用`@import`的方式插入样式。

## 6. CSS 选择器的解析规则

从右向左，这样会提高查找选择器所对应的元素的效率

## 7. CSS 选择优先级

选择器按优先级先后排列：`!important>内联>id>class = 属性 = 伪类 >标签 = 伪元素 > 通配符 *`

## 8. ::before和::after中双冒号和单冒号有什么区别？解释一下这2个伪元素的作用

```shell
在`css3`中使用单冒号来表示伪类，用双冒号来表示伪元素。但是为了兼容已有的伪元素的写法，在一些浏览器中也可以使用单冒号来表示伪元素。

伪类一般匹配的是元素的一些特殊状态，如`hover`、`link`等，而伪元素一般匹配的特殊的位置，比如`after`、`before`等。
```

## 9. 伪类与伪元素的区别

- 伪类用于当已有的元素处于某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的元素时，我们可以通过`:hover`来描述这个元素的状态。

伪元素用于创建一些不在文档树中的元素，并为其添加样式。它们允许我们为元素的某些部分设置样式。比如说，我们可以通过`::before`来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。

## 10. CSS 中哪些属性可以继承

- 字体相关的属性： `font-size、font-weight`
- 文本相关的属性：`color、text-align`
- 布局属性、列表属性：`list-style`
- 光标属性：`cursor`
- 元素可见性：`visibility`

当一个属性不是继承属性的时候，我们也可以通过将它的值设置为`inherit`来使它从父元素那获取同名的属性值来继承。

## 11. 关于伪类LVHA的解释

a标签有四种状态：链接访问前、链接访问后、鼠标滑过、激活，分别对应四种伪类`:link、:visited、:hover、:active；`

当链接未访问过时：

（1）当鼠标滑过`a`链接时，满足`:link`和`:hover`两种状态，要改变a标签的颜色，就必须将`:hover`伪类在`:link`伪类后面声明；
（2）当鼠标点击激活`a`链接时，同时满足`:link`、`:hover`、`:active`三种状态，要显示a标签激活时的样式（`:active`），
必须将`:active`声明放到`:link`和`:hover`之后。因此得出`LVHA`这个顺序。

当链接访问过时，情况基本同上，只不过需要将`:link`换成`:visited`。

这个顺序能不能变？可以，但也只有`:link`和`:visited`可以交换位置，因为一个链接要么访问过要么没访问过，不可能同时满足，也就不存在覆盖的问题。

## 12. CSS 清除浮动的方式

- 额外标签法：在需要清除浮动的元素后面添加一个空白标签，设置类名`clear`，设置`clear: both`即可
- 父级元素添加`overflow: hidden`;
- 伪元素清除浮动; 对需要清除浮动的元素添加一个`clearfix`类名，设置样式如下：

```css
.clearfix:after {
  /*正常浏览器 清除浮动*/
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom: 1;
  /*zoom 1 就是ie6 清除浮动方式  * ie7以下的版本才能识别 其他浏览器都不执行(略过)*/
}
```

## 13. 清除浮动的原理

- `clear`属性清除浮动：`clear`属性规定元素盒子的边不能喝浮动元素相邻。该属性只能影响使用清除的元素本身，不能影响其他元素。换而言之，如何已经存在浮动元素的话，那么该元素就不会像原本元素一样受其影响了。
- 其他的可以归为一类，都是通过触发BFC来实现的

## 14. BFC的概念, 哪些元素可以触发BFC

`BFC` 即 `Block Formatting Context` (块格式化上下文)， 是`Web`页面的可视化`CSS`渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。

## 15. 脱离文档流的方式

- `float`
- `position: absoute`
- `position: fixed`

## 16. position 的值定位原点

- `absolute`：生成绝对定位的元素，相对于值不为`static`的第一个父元素的paddingbox进行定位，也可以理解为离自己这一级元素最近的一级`position`设置为`absolute`或者`relative`的父元素的`paddingbox`的左上角为原点的。

- `fixed`：生成绝对定位元素，相对于浏览器窗口进行定位

- `relative`：生成相对定位的元素，相对于其元素本身所在正常位置进行定位

- `static`：默认值。没有定位，元素出现在正常的流中

- `sticky`：元素根据正常文档流进行定位，然后相对它的最近滚动祖先

## 17. display 有哪些值？说明他们的作用

## 18. flex 的属性有哪些

## 19. visibility: hidden, opacity: 0，display: none 区别

## 20. 了解重绘和重排吗，知道怎么去减少重绘和重排吗，让文档脱离文档流有哪些方法

## 21. z-index 是干什么用的？默认值是什么？与 z-index: 0 的区别

## 22. vw 和 vh 的概念

## 23. 经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用 hack 的技巧

## 24. 简单介绍使用图片 base64 编码的优点和缺点

## 25. 如果需要手动写动画，你认为最小时间间隔是多久，为什么

## 26. 画一条 0.5px 的线

## 27. transition 和 animation 的区别

## 28. 如何实现单行／多行文本溢出的省略（...）

## 29. 常见的元素隐藏方式

## 30. CSS3 @font-face 有用过吗

## 31. CSS 实现隔行变色

## 32. 一个满屏品字布局如何设计

## 33. CSS 画三角形

## 34. CSS 画扇形

## 35. CSS 画正方体

## 36. CSS 实现一个硬币旋转的效果

## 37. CSS 实现垂直居中

## 38. CSS 实现两列固定，中间自适应的布局

## 39. 实现自适应九宫格

## 40. 屏幕里面内容未占满的时候footer固定在屏幕可视区域的底部。占满的时候显示在网页的最底端
