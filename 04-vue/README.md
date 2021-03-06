
<!-- TOC -->

- [1. MVVM 和 MVC的区别](#1-mvvm-和-mvc的区别)
  - [1.1. MVC](#11-mvc)
  - [1.2. MVVM](#12-mvvm)
  - [1.3. MVVM和MVC的区别](#13-mvvm和mvc的区别)
- [2. vue 的优点](#2-vue-的优点)
- [3. vue 的响应式原理](#3-vue-的响应式原理)
- [4. vue 双向数据绑定原理](#4-vue-双向数据绑定原理)
- [5. Object.defineProperty 介绍](#5-objectdefineproperty-介绍)
- [6. 使用 Object.defineProperty() 来进行数据劫持有什么缺点](#6-使用-objectdefineproperty-来进行数据劫持有什么缺点)
- [7. vue 的生命周期函数](#7-vue-的生命周期函数)
- [8. Vue中父子组件生命周期执行顺序](#8-vue中父子组件生命周期执行顺序)
- [9. 组件传值](#9-组件传值)
- [10. nextTick 用法](#10-nexttick-用法)
- [11. v-if 和 v-show 的区别](#11-v-if-和-v-show-的区别)
- [12. 为什么 vue 组件中的 data 必须是函数](#12-为什么-vue-组件中的-data-必须是函数)
- [13. vue 的 activated 和 deactivated 钩子函数](#13-vue-的-activated-和-deactivated-钩子函数)
- [14. vue中key属性的作用](#14-vue中key属性的作用)
- [15. Vue中key属性用index为什么不行](#15-vue中key属性用index为什么不行)
- [16. Vue的路由模式](#16-vue的路由模式)
- [17. vue中$router和$route的区别](#17-vue中router和route的区别)
- [18. Vue diff算法详解](#18-vue-diff算法详解)
- [19. 移动端适配的方法](#19-移动端适配的方法)
- [20. rem 原理](#20-rem-原理)
- [21. rem 和 em 的区别](#21-rem-和-em-的区别)
- [22. 移动端 300ms 延迟的原因以及解决方案](#22-移动端-300ms-延迟的原因以及解决方案)
- [23. Vue 和 React 数据驱动的区别](#23-vue-和-react-数据驱动的区别)

<!-- /TOC -->
## 1. MVVM 和 MVC的区别

### 1.1. MVC

- `MVC`是应用最广泛的软件架构之一，一般`MVC`分为：`Model`（模型），`View`（视图）`Controller`（控制器）。这主要基于分层的目的，让彼此的职责分开。

- `View`一般通过`Controller`和`Model`进行联系。`Controller`是`Model`和`View`的协调者，`View`和`Model`不直接联系。基本都是单向联系。

- `View`传送指令到`Controller`。`Controller`完成业务逻辑后改变`Model`状态。`Model`将新的数据发送至`View`,用户得到反馈。

### 1.2. MVVM

- MVVM是把MVC中的Controller改变成了ViewModel。
- `View`的变化会自动更新到`ViewModel`,`ViewModel`的变化也会自动同步到`View`上显示,通过数据来显示视图层。

### 1.3. MVVM和MVC的区别

- `MVC`中`Controller`演变成`MVVM`中的`ViewModel`
- `MVVM`通过数据来显示视图层而不是节点操作
- `MVVM`主要解决了`MVC`中大量的`dom`操作使页面渲染性能降低,加载速度变慢,影响用户体验

## 2. vue 的优点

- 轻量级框架
- 学习成本较低
- 双向数据绑定
- 组件化
- 视图，数据，结构分离
- 虚拟 DOM
- 运行速度更快

## 3. vue 的响应式原理

数据发生变化后，会重新对页面渲染，这就是 `Vue` 响应式

要想完成这个过程，我们需要：

- 侦测数据的变化
- 收集视图依赖了哪些数据
- 数据变化时，自动“通知”需要更新的视图部分，并进行更新

对应专业俗语分别是：

数据劫持 / 数据代理 依赖收集 发布订阅模式

## 4. vue 双向数据绑定原理

- vue 通过使用双向数据绑定，来实现了 `View` 和 `Model` 的同步更新。`vue` 的双向数据绑定主要是通过使用数据劫持和发布订阅者模式来实现的。

- 首先我们通过 `Object.defineProperty()` 方法来对 `Model` 数据各个属性添加访问器属性，以此来实现数据的劫持，因此当 `Model` 中的数据发生变化的时候，我们可以通过配置的 `setter` 和 `getter` 方法来实现对 `View` 层数据更新的通知。

- 数据在 `html` 模板中一共有两种绑定情况，一种是使用 `v-model` 来对 `value` 值进行绑定，一种是作为文本绑定，在对模板引擎进行解析的过程中。

- 如果遇到元素节点，并且属性值包含 `v-model` 的话，我们就从 `Model` 中去获取 `v-model` 所对应的属性的值，并赋值给元素的 `value` 值。然后给这个元素设置一个监听事件，当 `View` 中元素的数据发生变化的时候触发该事件，通知 `Model` 中的对应的属性的值进行更新。

- 如果遇到了绑定的文本节点，我们使用 `Model` 中对应的属性的值来替换这个文本。对于文本节点的更新，我们使用了发布订阅者模式，属性作为一个主题，我们为这个节点设置一个订阅者对象，将这个订阅者对象加入这个属性主题的订阅者列表中。当 `Model` 层数据发生改变的时候，`Model` 作为发布者向主题发出通知，主题收到通知再向它的所有订阅者推送，订阅者收到通知后更改自己的数据。

## 5. Object.defineProperty 介绍

- `Object.defineProperty` 函数一共有三个参数，第一个参数是需要定义属性的对象，第二个参数是需要定义的属性，第三个是该属性描述符。

- 一个属性的描述符有一下属性，分别是 `value` 属性的值， `writable` 属性是否可写， `enumerable` 属性是否可枚举， `configurable` 属性是否可配置修改。 `get`属性 当访问该属性时，会调用此函数`set`属性 当属性值被修改时，会调用此函数。


## 6. 使用 Object.defineProperty() 来进行数据劫持有什么缺点

## 7. vue 的生命周期函数

## 8. Vue中父子组件生命周期执行顺序

## 9. 组件传值

## 10. nextTick 用法

## 11. v-if 和 v-show 的区别

## 12. 为什么 vue 组件中的 data 必须是函数

## 13. vue 的 activated 和 deactivated 钩子函数

## 14. vue中key属性的作用

## 15. Vue中key属性用index为什么不行

## 16. Vue的路由模式

## 17. vue中$router和$route的区别

## 18. Vue diff算法详解

## 19. 移动端适配的方法

## 20. rem 原理

## 21. rem 和 em 的区别

## 22. 移动端 300ms 延迟的原因以及解决方案

## 23. Vue 和 React 数据驱动的区别