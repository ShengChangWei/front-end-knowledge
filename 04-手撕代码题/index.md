<!--
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-03-02 11:52:00
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-03-04 19:31:06
 * @Description: file content
-->
<!-- TOC -->

- [1. 手写一个闭包](#1-手写一个闭包)
- [2. 手写一个count函数](#2-手写一个count函数)
- [3. 函数节流与抖动](#3-函数节流与抖动)
- [4. 手写一个 new](#4-手写一个-new)
- [5. 手写一个 sleep 睡眠函数](#5-手写一个-sleep-睡眠函数)
- [6. 实现一下继承 call apply bind](#6-实现一下继承-call-apply-bind)
- [7. 实现一个forEach方法](#7-实现一个foreach方法)
- [8. 用reduce实现map](#8-用reduce实现map)
- [9. ['1', '2', '3'].map(parseInt)返回值](#9-1-2-3mapparseint返回值)
- [10. 手写一个instanceof](#10-手写一个instanceof)
- [11. 手写一个 promise](#11-手写一个-promise)
- [12. 手写Promise.all()](#12-手写promiseall)
- [13. 手写Promise.race()](#13-手写promiserace)
- [14. 手写一个 Ajax](#14-手写一个-ajax)
- [15. 实现一个红绿灯（3s打印red，2s打印green，1s打印yellow）](#15-实现一个红绿灯3s打印red2s打印green1s打印yellow)
- [16. 斐波那契数列（递归，DP，循环）](#16-斐波那契数列递归dp循环)
- [17. 数组去重](#17-数组去重)
- [18. 实现一个add函数 满足add(1,2,3)与add(1)(2)(3)结果相同](#18-实现一个add函数-满足add123与add123结果相同)
- [19. 函数柯里化](#19-函数柯里化)
- [20. 手写一个 flatten 函数（数组降维）](#20-手写一个-flatten-函数数组降维)
- [21. 深拷贝 浅拷贝](#21-深拷贝-浅拷贝)
- [22. 手写一个单例模式](#22-手写一个单例模式)
- [23. 手写一个观察者模式](#23-手写一个观察者模式)
- [24. 手写一个发布订阅模式](#24-手写一个发布订阅模式)
- [25. 对一个页面打印所有的结点类型和结点名称](#25-对一个页面打印所有的结点类型和结点名称)
- [26. 获取一个页面所有标签的个数](#26-获取一个页面所有标签的个数)
- [27. 异步输出结果](#27-异步输出结果)
- [28. 水平垂直居中](#28-水平垂直居中)
- [29. 三角形 扇形](#29-三角形-扇形)
- [30. 实现圆形可点击区域](#30-实现圆形可点击区域)
- [31. 如何将浮点数点左边的数每三位添加一个逗号，如 12000000.11 转化为『12,000,000.11』](#31-如何将浮点数点左边的数每三位添加一个逗号如-1200000011-转化为『1200000011』)

<!-- /TOC -->
## 1. 手写一个闭包

- 闭包的简单实现

```js
function sum(a) {
  return function (b) {
    return a + b;
  }
}
const result = sum(1)(2); // 3
```

- 闭包案例（依次输出，1、2、3、4）

```js
// 要求：依次输出，1、2、3、4
for(var i = 1; i<5; i++) {
  setTimeout(() => {
    console.log(i)
  })
}
// ① 闭包解决方案
for(var i= 1; i<5; i++) {
  (function(j) {
    setTimeout(() => {
      console.log(j)
    })
  })(i)
}

// ② 使用let，let有块级作用域
for(let i = 1; i<5; i++) {
  setTimeout(() => {
    console.log(i)
  })
}
```

## 2. 手写一个count函数

每次调用一个函数自动加1

```js
 const count = (function () {
   var a  = 0;
   return function() {
     console.log(++a)
   }
 })()

 count(); // 1
 count(); // 2
 count(); // 3
```

## 3. 函数节流与抖动

- 防抖：不管事件触发频率多高，一定是在时间触发`n`秒后才执行，如果在`n`秒内再次触发，就以再次触发的时间作为开始，重新计时
- 节流：在一定时间内，不管触发了多少次回调，我只认第一次，并在计时结束后给予响应

> 防抖（需要立即执行的防抖）

```js
function debounce(fn, wait, immediate = true) {
  // 缓存定时器
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    if(immediate && !timer) {
        fn.apply(this, args)
    }
    timer = setTimeout(() => {
      fn.apply(this,args);
    }, wait)
  }
}

function handle() {
  console.log('测试防抖')
}

window.addEventListener('scroll', debounce(handle, 1000))
```

> 节流

```js
function throttle(fn, time) {
  let pre = 0;
  let timer = null;
  return function(...args) {
    if(Date.now() - pre > time) {
      clearTimeout(timer);
      timer = null;
      pre = Date.now();
      fn.apply(this, args);
    } else if(!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
      })
    }
  }
}
```

## 4. 手写一个 new

- new 做了什么
  - 1、创建了一个空对象
  - 2、链接到原型（空对象的`__proto__`成员指向构造对象`prototype`成员对象）
  - 3、改变this的指向，让this指向新创建的实例对象
  - 4、返回一个新对象

- `new` 方法无法重写，模拟实现`new`方法

```js
function myNew() {
  // 1、创建一个空对象
  const obj = {};
  // 2、取出参数第一个构造函数
  const contructor = [].shift.call(arguments);
  // 3、链接到原型
  obj.__proto__ = contructor.prototype;
  // 4、改变this的指向
  const result = contructor.apply(obj,arguments);
  // 5、返回一个新对象
  return typeof result === 'object'? result : obj;
}
```

## 5. 手写一个 sleep 睡眠函数

 `sleep(1000)`代表等待`1000ms`执行

```js
//  方法一：ES5方法实现
function sleep(callback, time) {
  if(typeof callback == 'function') {
    seTimeout(callback, time)
  }
};

// 方法二：使用Promise方式
const sleep = (time) => {
  return new Promise((resolve) => {
   setTimeout(resolve, time);
  })
}
sleep(2000).then(() => {
  console.log('方法')
});

// 方法三：利用async
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
asymc function init() {
  var temp = await sleep(2000);
  console.log('方法')
}
```

## 6. 实现一下继承 call apply bind

> 实现call方法

实现思路：

- 不传入第一个参数，那么默认为window
- 改变`this`指向，让新的对象可以执行该函数，那么思路是否可以变成给新的对象添加一个函数，然后再执行完以后删除

```js
Function.Prototype.myCall = function(context) {
  const context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

// 测试
const x = 0;
function f(y,z) {
  console.log(this.x + y + z);
}
const obj = {
  x:1
}
fn.myCall(obj,3,2);
```

> 实现apply方法

- `apply`实现思路和`call`差不多，只是再处理传入第二参数不同

```js
Function.prototype.myApply = function(context) {
  const context = context || window;
  context.fn = this
  var result
  if(arguments[1]) {
    return result = context.fn(...arguments[1])
  } else {
    return context.fn()
  }
  delete context.fn;
  return result;
}
```
> 实现bind方法

```js
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  var _this = this
  var args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
```

## 7. 实现一个forEach方法

## 8. 用reduce实现map

## 9. ['1', '2', '3'].map(parseInt)返回值

## 10. 手写一个instanceof

## 11. 手写一个 promise

## 12. 手写Promise.all()

## 13. 手写Promise.race()

## 14. 手写一个 Ajax

## 15. 实现一个红绿灯（3s打印red，2s打印green，1s打印yellow）

## 16. 斐波那契数列（递归，DP，循环）

## 17. 数组去重

## 18. 实现一个add函数 满足add(1,2,3)与add(1)(2)(3)结果相同

## 19. 函数柯里化

## 20. 手写一个 flatten 函数（数组降维）

## 21. 深拷贝 浅拷贝

## 22. 手写一个单例模式

## 23. 手写一个观察者模式

## 24. 手写一个发布订阅模式

## 25. 对一个页面打印所有的结点类型和结点名称

## 26. 获取一个页面所有标签的个数

## 27. 异步输出结果

## 28. 水平垂直居中

## 29. 三角形 扇形

## 30. 实现圆形可点击区域

## 31. 如何将浮点数点左边的数每三位添加一个逗号，如 12000000.11 转化为『12,000,000.11』
