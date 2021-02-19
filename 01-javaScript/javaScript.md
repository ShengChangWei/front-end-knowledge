<!--
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-02-19 11:03:18
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-02-19 11:53:13
 * @Description: file content
-->
<!-- TOC -->

- [javaScript](#javascript)
  - [1、js数据类型](#1js数据类型)
  - [2、基本数据类型与引用数据类型的区别](#2基本数据类型与引用数据类型的区别)
  - [3、typeof能否正确判断数据类型？instanceof 能判断对象的原理是什么](#3typeof能否正确判断数据类型instanceof-能判断对象的原理是什么)
  - [4、手写instanceof](#4手写instanceof)
  - [5、理解原型链](#5理解原型链)
  - [6、javaScript 继承的几种实现方式](#6javascript-继承的几种实现方式)
  - [7、null 和 undefined 的区别](#7null-和-undefined-的区别)
  - [8、js 遍历对象和遍历数组的方式](#8js-遍历对象和遍历数组的方式)
  - [9、数据类型相互转换规则](#9数据类型相互转换规则)
  - [10、{} 和 [] 的 valueOf 和 toString 的结果是什么](#10-和--的-valueof-和-tostring-的结果是什么)

<!-- /TOC -->
# javaScript

## 1、js数据类型

js 分两种数据类型：
  6种基本数据类型：`Number` `Boolean` `String` `undefined` `null` `Symbol` 其中 `Symbol` 类型，代表创建后独一无二且不可变的数据类型，它的出现我认为主要是为了解决可能出现的全局变量冲突的问题。
  引用数据类型：`Object`(在JS中除了基本数据类型以外的都是对象)

## 2、基本数据类型与引用数据类型的区别

* 声明变量时内存分配不同
  - 基本数据类型保存在栈中，引用数据类型保存在堆中
* 不同的内存分配带来不同的访问机制
  - 在javascript中是不允许直接访问保存在堆内存中的对象的，所以在访问一个对象时，首先得到的是这个对象在堆内存中的地址，然后再按照这个地址去获得这个对象中的值，这就是传说中的按引用访问。而原始类型的值则是可以直接访问到的。
* 复制变量时的不同
  - 基本数据类型：在将一个保存着原始值的变量复制给另一个变量时，会将原始值的副本赋值给新变量，此后这两个变量是完全独立的，他们只是拥有相同的value而已。
  - 引用数据类型：在将一个保存着对象内存地址的变量复制给另一个变量时，会把这个内存地址赋值给新变量，也就是说这两个变量都指向了堆内存中的同一个对象，他们中任何一个作出的改变都会反映在另一个身上。
* 参数传递的不同（把实参复制给形参的过程）
首先我们应该明确一点：ECMAScript中所有函数的参数都是按值来传递的。但是为什么涉及到原始类型与引用类型的值时仍然有区别呢？还不就是因为内存分配时的差别。
  - 基本数据类型：只是把变量里的值传递给参数，之后参数和这个变量互不影响。
  - 引用数据类型：对象变量它里面的值是这个对象在堆内存中的内存地址，这一点你要时刻铭记在心！因此它传递的值也就是这个内存地址，这也就是为什么函数内部对这个参数的修改会体现在外部的原因了，因为它们都指向同一个对象。

## 3、typeof能否正确判断数据类型？instanceof 能判断对象的原理是什么

* typeof 对于基本数据类型来说，除了null都可以显示正确的类型，typeof null 返回一个'object'，所以typeof 并不能准确判断变量到底是什么类型
* typeof 对于引用类型来说，除了函数都会显示object,typeof console.log 返回一个'function'，instanceof可以正确判断一个数的数据类型，因为内部机制是通过原型链来判断的

## 4、手写instanceof

```javascript
 function myInstanceof(left, right) {
    // 获取的类型的原型
    let prototype = right.prototype;
    // 获取对象的原型
    let obj = left.__proto__;
    // 判断对象的类型是否等于类型的原型
    while(true) {
      if(obj === null) return false;
      if(obj === prototype) return true;
      obj = obj.__proto__;
    }
  }
```

## 5、理解原型链

理解原型链首先理解这张图：

![prototype](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3842555d9aef47af98102f763b2b88ff~tplv-k3u1fbpfcp-watermark.image)

## 6、javaScript 继承的几种实现方式

## 7、null 和 undefined 的区别

## 8、js 遍历对象和遍历数组的方式

## 9、数据类型相互转换规则

## 10、{} 和 [] 的 valueOf 和 toString 的结果是什么