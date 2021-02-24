<!--
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-02-19 11:03:18
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-02-24 11:47:27
 * @Description: file content
-->

<!-- TOC -->

- [1. js数据类型](#1-js数据类型)
- [2. 基本数据类型与引用数据类型的区别？](#2-基本数据类型与引用数据类型的区别)
- [3. null 和 undefined 的区别](#3-null-和-undefined-的区别)
- [4. 数据类型相互转换规则](#4-数据类型相互转换规则)
  - [4.1. 其他类型转换成String](#41-其他类型转换成string)
  - [4.2. 其他类型转换成Number](#42-其他类型转换成number)
  - [4.3. 其他类型转换成Boolean](#43-其他类型转换成boolean)
- [5. 什么情况下会发生布尔值的隐式强制类型转换](#5-什么情况下会发生布尔值的隐式强制类型转换)
- [6. == 操作符的强制类型转换规则](#6--操作符的强制类型转换规则)
- [7. 如何将字符串转化为数字，例如 '12.3b'](#7-如何将字符串转化为数字例如-123b)
- [8. || 和 && 操作符的返回值](#8--和--操作符的返回值)
- [9. typeof能否正确判断数据类型？instanceof 能判断对象的原理是什么](#9-typeof能否正确判断数据类型instanceof-能判断对象的原理是什么)
- [10. 手写instanceof](#10-手写instanceof)
- [11. 理解原型链](#11-理解原型链)
- [12. javaScript 继承的几种实现方式](#12-javascript-继承的几种实现方式)
- [13. js 遍历对象和遍历数组的方式](#13-js-遍历对象和遍历数组的方式)
  - [13.1. 遍历对象](#131-遍历对象)
  - [13.2. 遍历数组](#132-遍历数组)
- [14. valueOf 和 toString 的区别，解析toPrimitive](#14-valueof-和-tostring-的区别解析toprimitive)
- [15. {} 和 [] 的 valueOf 和 toString 的结果是什么](#15--和--的-valueof-和-tostring-的结果是什么)
- [16. eval 是做什么的](#16-eval-是做什么的)
- [17. 事件对象中的clientX offsetX screenX pageX的区别](#17-事件对象中的clientx-offsetx-screenx-pagex的区别)
- [18. 三种事件模型是什么](#18-三种事件模型是什么)
- [19. 如何阻止事件冒泡](#19-如何阻止事件冒泡)
- [20. 如何阻止事件默认行为](#20-如何阻止事件默认行为)
- [21. 事件代理/事件委托以及优缺点](#21-事件代理事件委托以及优缺点)
- [22. load 和 DOMContentLoaded 事件的区别](#22-load-和-domcontentloaded-事件的区别)
- [23. js判断图片是否加载完毕的方式](#23-js判断图片是否加载完毕的方式)
- [24. Object.defineProperty 用法](#24-objectdefineproperty-用法)
- [25. js 延迟加载的方式有哪些](#25-js-延迟加载的方式有哪些)
- [26. js 脚本 defer 和 async 的区别](#26-js-脚本-defer-和-async-的区别)
- [27. async await](#27-async-await)
- [28. Event Loop 事件循环](#28-event-loop-事件循环)
- [29. JS 跨域怎么做](#29-js-跨域怎么做)
- [30. JSONP 怎么实现的](#30-jsonp-怎么实现的)
- [31. JOSNP 有什么优缺点](#31-josnp-有什么优缺点)
- [32. new 运算符的过程](#32-new-运算符的过程)
- [33. 数组的 push() 和 pop() 方法的返回值是什么](#33-数组的-push-和-pop-方法的返回值是什么)
- [34. JS 作用域](#34-js-作用域)
- [35. ES6 新特性（知道越多越好，模糊不清的就不要说了）](#35-es6-新特性知道越多越好模糊不清的就不要说了)
- [36. let 和 var 的区别](#36-let-和-var-的区别)
- [37. 闭包的特性以及优缺点](#37-闭包的特性以及优缺点)
- [38. 箭头函数与普通函数的区别](#38-箭头函数与普通函数的区别)
- [39. ES6 中箭头函数 VS 普通函数的 this 指向](#39-es6-中箭头函数-vs-普通函数的-this-指向)
- [40. JS 实现对象（都是简单类型的值）的深拷贝](#40-js-实现对象都是简单类型的值的深拷贝)
- [41. JSON.parse(JSON.stringify(obj)) 实现深拷贝需要注意的问题](#41-jsonparsejsonstringifyobj-实现深拷贝需要注意的问题)
- [42. 手动实现一个深拷贝](#42-手动实现一个深拷贝)
- [43. Promise 是做什么的，有哪些API](#43-promise-是做什么的有哪些api)
  - [43.1. Promise用法](#431-promise用法)
  - [43.2. Promise.prototype.then()](#432-promiseprototypethen)
  - [43.3. Promise.prototype.catch()](#433-promiseprototypecatch)
  - [43.4. Promise.all()](#434-promiseall)
  - [43.5. Promise.race()](#435-promiserace)
  - [43.6. Promise.resolve()](#436-promiseresolve)
  - [43.7. Promise.reject()](#437-promisereject)
- [44. Promise不兼容怎么解决](#44-promise不兼容怎么解决)
- [45. Ajax 基本流程](#45-ajax-基本流程)
- [46. Ajax 的 readyState 的几种状态分别代表什么](#46-ajax-的-readystate-的几种状态分别代表什么)
- [47. Ajax 禁用浏览器的缓存功能](#47-ajax-禁用浏览器的缓存功能)
- [48. 谈谈对前端工程化的理解](#48-谈谈对前端工程化的理解)
- [49. js 的几种模块规范](#49-js-的几种模块规范)
- [50. ES6 模块与 CommonJS 模块、AMD、CMD 的差异](#50-es6-模块与-commonjs-模块amdcmd-的差异)
- [51. webpack 的功能](#51-webpack-的功能)
- [52. webpack 常用插件](#52-webpack-常用插件)
- [53. arguments怎么转化成真数组](#53-arguments怎么转化成真数组)
- [54. js的对象的常用的方法](#54-js的对象的常用的方法)
- [55. js的字符串的常用的方法](#55-js的字符串的常用的方法)
- [56. js的数组的常用的方法](#56-js的数组的常用的方法)

<!-- /TOC -->

本文主要学习来源：<https://github.com/lf2021/Front-End-Interview> 非常感谢

## 1. js数据类型

js 分两种数据类型：
  6种基本数据类型：`Number`、 `Boolean`、 `String`、 `undefined`、 `null`、 `Symbol` 其中 `Symbol` 类型，代表创建后独一无二且不可变的数据类型，它的出现我认为主要是为了解决可能出现的全局变量冲突的问题。
  
  引用数据类型：`Object`(在JS中除了基本数据类型以外的都是对象)

## 2. 基本数据类型与引用数据类型的区别？

- 声明变量时内存分配不同
  - 基本数据类型保存在栈中，引用数据类型保存在堆中
- 不同的内存分配带来不同的访问机制
  - 在javascript中是不允许直接访问保存在堆内存中的对象的，所以在访问一个对象时，首先得到的是这个对象在堆内存中的地址，然后再按照这个地址去获得这个对象中的值，这就是传说中的按引用访问。而原始类型的值则是可以直接访问到的。
- 复制变量时的不同
  - 基本数据类型：在将一个保存着原始值的变量复制给另一个变量时，会将原始值的副本赋值给新变量，此后这两个变量是完全独立的，他们只是拥有相同的value而已。
  - 引用数据类型：在将一个保存着对象内存地址的变量复制给另一个变量时，会把这个内存地址赋值给新变量，也就是说这两个变量都指向了堆内存中的同一个对象，他们中任何一个作出的改变都会反映在另一个身上。
- 参数传递的不同（把实参复制给形参的过程）
首先我们应该明确一点：ECMAScript中所有函数的参数都是按值来传递的。但是为什么涉及到原始类型与引用类型的值时仍然有区别呢？还不就是因为内存分配时的差别。
  - 基本数据类型：只是把变量里的值传递给参数，之后参数和这个变量互不影响。
  - 引用数据类型：对象变量它里面的值是这个对象在堆内存中的内存地址，这一点你要时刻铭记在心！因此它传递的值也就是这个内存地址，这也就是为什么函数内部对这个参数的修改会体现在外部的原因了，因为它们都指向同一个对象。
  
## 3. null 和 undefined 的区别

- 两者都是基本数据类型，分别都只有一个值，就是`undefined`和`null`
- `undefined`代表的含义是未定义，`null`代表的含义是空对象，变量声明未赋值和函数没有返回值时会返回`undefined`, `null`主要用于赋值给可能会返回对象的变量，作为初始化。
- 使用`typeof`进行判断时，`undefined`会返回"undefined",`null`会返回"object",这是历史遗留问题。
- 两者使用`==`相等比较返回true，使用`===`全等比较返回false
- `undefined`在`js`中不是一个保留字。这意味着可以使用`undefined`来作为一个变量名，这种做法非常危险，他会影响我们对`undefined`的判断

## 4. 数据类型相互转换规则

### 4.1. 其他类型转换成String

- `null`和`undefined`类型：`null`转换成"null"，`undefined`转换为"undefined"
- `Number`类型：直接转换，不过极小极大的数字会使用指数形式
- `Boolean`类型：`true`转换为"true", `false`转换为"false"
- `Symbol`类型：直接转换，只允许显式强制类型转换，使用隐式类型转换会产生错误
- 对普通对象来说，除非自行定义`toString()`方法，否则会调用toString()（Object.prototype.toString()）来返回内部属性[[Class]]的值，如"[Object Object]"。如果对象有自己的toString()方法，字符串化时就会调用该方法并使用其返回值。

### 4.2. 其他类型转换成Number

- `null`和`undefined`类型：`null`转换成0，`undefined`转换为`NaN`
- `String` 类型: 如果使用 Number() 函数进行转换，如果包含非数字值则转换为`NaN`，空字符串为 0。
- `Boolean`类型：`true`转换为1, `false`转换为0
- `Symbol`类型：不能转换为数字，会报错
- 对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型值，则再遵循以上规则将其强制转换为数字。

```shell
为了将值转换为相应的基本类型值，抽象操作 ToPrimitive 会首先（通过内部操作 DefaultValue）检查该值是否有valueOf() 方法。
如果有并且返回基本类型值，就使用该值进行强制类型转换。如果没有就使用 toString() 的返回值（如果存在）来进行强制类型转换。
如果 valueOf() 和 toString() 均不返回基本类型值，会产生 TypeError 错误。
```

### 4.3. 其他类型转换成Boolean

假值：`undefined`、`null`、`false`、`+0`、`-0`、`NaN`、`""`

假值转换结果为`false`,假值以外的都应该是真值

## 5. 什么情况下会发生布尔值的隐式强制类型转换

- `if(...)`语句中的条件判断表达式
- `for(..;..;..)`语句中的条件判断表达式
- `while(..)`和`do..while(..)`循环中的条件判断表达式
- 三元表达式（三目表达式）
- 逻辑运算符 `&&` `||` `!`;

## 6. == 操作符的强制类型转换规则

- `null`和`undefined`之间的相等比较，结果为true。其他值和它们进行比较都返回false
- `String`和`Number`之间相等比较，会先将字符串转换为数字再进行比较
- 其他类型与`Boolean`之间相等比较,先将布尔值转换成数字，再应用其他规则进行比较
- 对象和非对象之间的相等比较，对象先调用`ToPrimitive`抽象操作后，再进行比较
- 如果一个操作值为`NaN`,则相等比较饭回`false`（NaN本身不等于NaN）
- 如何两个操作值都是对象，则比较它们是不是指向同一个对象。如果两个操作数都指向同一个对象，则相等比较返回`true`,否则返回`false`

## 7. 如何将字符串转化为数字，例如 '12.3b'

- `Number()`：前提是所包含的字符串不包含不合法字符
- `parseInt()`：可解析一个字符串，并返回一个整数。还可以设置要解析的数字的基数。当基数的值为 0，或没有设置该参数时，`parseInt()`会根据 `string` 来判断数字的基数。
- `parseFloat()`：函数解析一个字符串参数并返回一个浮点数。

## 8. || 和 && 操作符的返回值

 `||`和`&&`首先会对第一个操作数进行条件判断，如果其不是布尔值就进行ToBoolean强制类型转换，然后再执行条件判断。

- 对于`||`来说，如果条件判断结果为`true`就返回第一个操作数的值，如果为`false`就返回第二个操作数的值。
- 对于`&&`来说，如果条件判断结果为`true`就返回第二个操作数的值，如果为`false`就返回第一个操作数的值
- `||`和`&&`返回它们其中一个操作数的值，而非条件判断的结果。

## 9. typeof能否正确判断数据类型？instanceof 能判断对象的原理是什么

- typeof 对于基本数据类型来说，除了null都可以显示正确的类型，typeof null 返回一个'object'，所以typeof 并不能准确判断变量到底是什么类型
- typeof 对于引用类型来说，除了函数都会显示object,typeof console.log 返回一个'function'，instanceof可以正确判断一个数的数据类型，因为内部机制是通过原型链来判断的

## 10. 手写instanceof

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

## 11. 理解原型链

理解原型链首先理解这张图：

![prototype](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3842555d9aef47af98102f763b2b88ff~tplv-k3u1fbpfcp-watermark.image)

首先理解：构造函数，原型对象，实例对象之间的关系

- 对象都有一个`__proto__`属性
- 构造函数才有原型对象`prototype`
- 实例对象`f1`是通过构造函数`Foo()` `new`出来的，实例对象有一个`__proto__`属性，指向构造函数的原型对象，即`f1.__proto__ === Foo.prototype`
- `prototype`本身也是一个对象，它也有`__proto__`,依次向上找会找到`Object.prototype`, `Object.prototype`在向上找就是`null`了，按此查找形成的链条就是原型链
- 原型对象有一个`constructor`指向构造函数本人，构造函数也是对象，同样也就用`__proto__`指向`Function.prototype`
- `__proto__`先指向构造函数的原型对象，最后再指向`Object.prototype`

## 12. javaScript 继承的几种实现方式

- 原型链继承：有一定的缺点：原型中包含的引用值会在所有的实例间共享，容易造成修改修改混乱。还有子类型在实例化时不能给父类型的构造函数传参。
- 借用构造函数继承：借用构造函数的一个优点就是可以在子类构造函数中向父类构造函数传参。借用构造函数的主要缺点，也是使用构造函数模式自定义类型的问题：必须在构造函数中定义方法，因此函数不能重用。此外，子类也不能访问父类原型上定义的方法，因此所有类型只能借用构造函数模式。
- 组合继承：综合了原型链和借用构造函数，基本思路是使用原型链继承原型上的属性和方法，而借用构造函数继承实例属性。这样既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性。由于我们是以父类的实例作为子类的原型，又在子类构造函数中调用父类，所以调用了两次父类构造函数，造成了子类原型中多了很多不必要的属性
- 原型式继承：原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。
- 寄生式继承：寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是我们的自定义类型时。缺点是没有办法实现函数的复用。
- 寄生式组合继承：组合继承的缺点就是使用父类型的实例做为子类型的原型，导致添加了不必要的原型属性。寄生式组合继承的方式是使用父类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。

## 13. js 遍历对象和遍历数组的方式

### 13.1. 遍历对象

- for...in 循环遍历对象自身的和继承的可枚举属性（不包含Symbol属性）
- Object.keys() 返回一个数组，包括对象自身的（不含继承的）所有可枚举的属性（不包含Symbol属性）
- Object.getOwnPropertyNames() 返回一个数组，包含对象自身的所有属性（不包含Symbol属性，但是包括不可枚举属性）
- Reflect.ownKeys() 返回一个数组，包含对象自身的所有属性（包括Symbol属性和不可枚举属性）

### 13.2. 遍历数组

- forEach()
- for...in 遍历的是索引
- for...of

## 14. valueOf 和 toString 的区别，解析toPrimitive

- `valueOf`和`toString`几乎都是在出现操作付`(+-*/==><)`时被调用（隐式转换）
- `toString`返回一个表示该对象的字符串，当对象表示为文本值或以期望的字符串方式被引用时，`toString`方法被自动调用。
- `valueOf`返回当前对象的原始值。
- `valueOf`偏向于运算，`toString`偏向于显示。
- 在进行对象转换时，将优先调用`toString`方法，如若没有重写 `toString`，将调用 `valueOf` 方法；如果两个方法都没有重写，则按`Object`的`toString`输出。
- 在进行强转字符串类型时，将优先调用`toString`方法，强转为数字时优先调用 `valueOf`。
- 使用运算操作符的情况下，`valueOf`的优先级高于`toString`。

[Symbol.toPrimitive]

`Symbol.toPrimitive` 是一个内置的`Symbol`值，它是作为对象的函数值属性存在的，当一个对象转换为对应的原始值时，会调用此函数。

- 作用：同valueOf()和toString()一样，但是优先级要高于这两者；
- 该函数被调用时，会被传递一个字符串参数`hint`，表示当前运算的模式，一共有三种模式：
  - string：字符串类型
  - number：数字类型
  - default：默认
  
阅读：
<https://juejin.cn/post/6873215243804213262>

## 15. {} 和 [] 的 valueOf 和 toString 的结果是什么

- {} 的`valueOf` 结果为 {}， toString的结果为"[object, Object]"
- [] 的`valueOf`结果为 [], toString结果为 ""

## 16. eval 是做什么的

- 将对应的字符串解析成`js`代码并运行
- 应避免使用`eval`,不安全，非常耗性能（2次，一次解析成`js`语句，一次执行）

## 17. 事件对象中的clientX offsetX screenX pageX的区别

<https://juejin.cn/post/6883353218319908871>

## 18. 三种事件模型是什么

- `DOM0`级模型，这种模型不会传播，所以没有事件流概念，但是现在有的浏览器支持一冒泡的方式实现，它可以在网页中直接定义监听函数，也可以通过`js`属性来指定监听函数。这种方式是所有浏览器都兼容

- `IE`事件模型，在该事件模型中，一共事件有两个过程，事件处理阶段和事件冒泡阶段。事件处理阶段会首先执行目标元素绑定的监听事件。然后是事件冒泡阶段，冒泡指的是事件从目标元素冒泡到document,，依次检查经过的节点是否绑定了事件监听函数，如果有则执行。这种模型通过attachEvent来添加监听函数，可以添加多个监听函数，会按顺序依次执行。

- `DOM2`级事件模型，在该事件模型中，一次事件共有三个过程，第一个过程是事件捕获阶段。捕获指的是事件从document一直向下传播到目标元素，依次检查经过的节点是否绑定了事件监听函数，如果有则执行。后面两个阶段和`IE`事件模型的两个阶段相同。这种事件模型，事件绑定的函数是addEventListener, 其中第三个参数可以指定事件是否在捕获阶段执行。默认是false，在冒泡阶段执行

## 19. 如何阻止事件冒泡

要求：知道单词怎读

```js
// w3c
e.stopPropagation();

// IE
e.cancelBubble = true;
```

## 20. 如何阻止事件默认行为

```js
// google、IE8以上
e.preventDefault();

// IE8及以下
window.event.returnValue = false;

// 无兼容问题（但不能用于节点直接onclick绑定函数）
return false;
```

## 21. 事件代理/事件委托以及优缺点

```shell
事件委托：本质上是利用浏览器事件冒泡机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件委托。
```

- 优点：
  - 减少内存消耗，不必为大量元素绑定事件
  - 可以为动态添加的元素绑定事件
- 缺点：
  - 部分事件如`focus`、`blur`等无冒泡机制，所以无法委托。
  - 事件委托有对子元素的查找过程，委托层级过深，可能会有性能问题。
  - 频繁触发的事件如`mousemove`、`mouseout`、`mouseover`等，不适合事件委托

## 22. load 和 DOMContentLoaded 事件的区别

- `load`: 当整个页面以及所有依赖资源如样式表和图片都已加载完成，才会触发load事件
- `DOMContentLoaded`: 只要页面`DOM`加载完成就触发，无需等待依赖资源的加载

## 23. js判断图片是否加载完毕的方式

- `load`事件：`img`元素有一个`load`事件可以用来判断图片是否加载完毕
- `readystatechange`事件:`readyState`为`complete`和`loaded`则表明图片已经加载完毕。测试IE6-IE10支持该事件，其它浏览器不支持。
- `img`的`complete`属性 `img.complete = true`则表明图片已经加载完毕

## 24. Object.defineProperty 用法

```js
Object.defineProperty(obj, prop, descriptor)

const obj = {};

Object.defineProperty(obj, 'property', {
  value: 42,
  writable: false
});

obj.property = 77;
// throws an error in strict mode

console.log(obj.property);
// expected output: 42
```

- `obj`要定义属性的对象。
- `prop` 要定义或修改的属性的名称或`Symbol`。
- `descriptor` 要定义或修改的属性描述符。参数有:
  - `value` 该属性对应的值。可以是任何有效的`JavaScript`值（数值，对象，函数等）。默认为`undefined`
  - `writable` 当且仅当该属性的 `writable` 键值为`true`时，属性的值，也就是上面的 `value`，才能被赋值运算符改变。 默认为 `false`。
  - `configurable`当且仅当该属性的`configurable`键值为`true`时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。 默认为`false`。
  - `enumerable` 当且仅当该属性的`enumerable`键值为`true`时，该属性才会出现在对象的枚举属性中。默认为`false`

## 25. js 延迟加载的方式有哪些

```shell
js 延迟加载，也就是等页面加载完成后再加载javaScript文件。js延迟加载有助于提高页面加载速度。
```

一般有以下几种方式：

- `defer`属性
- `async`属性
- 动态创建`DOM`方式
- 使用`setTimeout`延迟方法
- 让`js`最后加载

## 26. js 脚本 defer 和 async 的区别

- `defer``延迟执行引入`的脚本，脚本的`加载`与`HTML`解析两者是并行的，只有当整个`document`解析完毕后再`执行`,在`DOMContentLoaded`事件触发之前完成。多个脚本按顺序执行。
- `async`属性表示`异步执行引入`的javaScript,与`defer`的区别在于，如果已经加载好，就开始执行，也就是说它的执行仍然会阻塞文档的解析，只是它的加载过程不会阻塞。多个脚本的执行顺序无法保证。

## 27. async await

```shell
官网：async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
```

- `async`单独使用的时候，放在函数前面表示这个函数是一个异步函数，如果`async`函数有返回结果，必须要用`.then()`方法来承接（也就是返回的值会被自动处理成`promise`对象）

```js
async function bar() {
  return 0
}
bar.then(data => {
  console.log(data)
})
```

- `async``await`搭配使用的时候，`await`是等待此函数执行后，再执行下一个，可以把异步函数变成同步来执行，控制函数的执行顺序。`await`一定要搭配`async`使用。

```js
let foo = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(0);
      resolve();
    }, 1000);
  })
}

async function bar() {
  await foo();
  console.log(1);
}
console.log(bar()); // 隔1秒同时输出 0 1
```

- 当`await`后跟的是普通函数（非`promise()`）

```js
let f1 = () => {
  setTimeout(() => {
    console.log(0);
  }, 1000)
}

let f2 = () => {
  setTimeout(() => {
    console.log(1);
  }, 1000)
}

async function bar() {
  await f1();
  await f2();
  console.log(3);
}

console.log(bar()); // 3 隔1秒同时输出 0 1
```

## 28. Event Loop 事件循环

## 29. JS 跨域怎么做

阅读： <https://www.cnblogs.com/laixiangran/p/9064769.html>

```shell
什么是跨域？当一个请求url的 协议、域名、端口三者之间任意一个与当前页面url不同即为跨域。
```

- `JSONP`(JSON with Padding) 通过动态创建`script`，再请求一个带参网址实现跨域通信。

- `CORS` (跨域资源共享)`CORS`的基本思想就是使用自定义的`HTTP`头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功还是失败。

```shell
普通跨域请求：只需服务端设置 Access-Control-Allow-Origin 即可，前端无须设置，若要带 cookie 请求：前后端都需要设置。前端设置withCredentials为true,后端设置Access-Control-Allow-Credentials为true,同时Access-Control-Allow-Origin不能设置为*
目前，所有浏览器都支持该功能(IE8+；IE8/9 需要使用 XDomainRequest 对象来支持 CORS)，CORS 也已经成为主流的跨域解决方案。
```

- `window.postMessage` 现代浏览器中多窗口通信使用 `HTML5` 规范的`targetWindow.postMessage(data, origin)`;其中 `data` 是需要发送的对象，`origin` 是目标窗口的 `origin`。`window.addEventListener('message', handler, false)`;`handler` 的 `event.data` 是 `postMessage` 发送来的数据，`event.origin` 是发送窗口的`origin`，`event.source` 是发送消息的窗口引用
- 服务器代理 内部服务器代理请求跨域`url`，然后返回数据

## 30. JSONP 怎么实现的

## 31. JOSNP 有什么优缺点

## 32. new 运算符的过程

- 创建一个空对象{}；
- 构造函数中的 this 指向该空对象
- 执行构造函数为这个空对象添加属性
- 判断构造函数有没有返回值，如果返回值是个对象，则返回这个对象；否则返回创建的“空对象”

## 33. 数组的 push() 和 pop() 方法的返回值是什么

- `push()`将一个或多个元素添加到数组的末尾，并返回该数组的新长度
- `pop()`方法从数组中删除最后一个元素，并返回该元素的值

## 34. JS 作用域

- `ES5`只有全局作用域和函数作用域
  - 全局作用域：代码在程序的任何地方都能被访问，`window`对象的内置属性都存在全局作用域
  - 函数作用域：在固定的代码片段才能被访问
- ES6有块级作用域

## 35. ES6 新特性（知道越多越好，模糊不清的就不要说了）

- `let` `const` 块级作用域
- 箭头函数
- 新增一个基本数据类型：`Symbol`表示唯一的
- 模板字符串
- 解构赋值
- 扩展运算符（...）
- promise
- proxy
- 模块化
- async
- class

## 36. let 和 var 的区别

- `var`是函数作用域，`let`是块级作用域
- `var`存在变量提升，`let`没有变量提升
- 在代码块中，使用`let`命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（TDZ）

## 37. 闭包的特性以及优缺点

```js
function test() {
  var age = 18;
  function addAage() {
    age++;
    alert(age)
  }
  return addAge;
}
```

闭包有三个特性：

- 函数里面嵌套函数
- 内部的函数使用外部函数的参数和变量
- 参数和变量不会被垃圾回收机制回收

闭包的优点：

- 希望一个变量长期保存内存中
- 避免全局变量污染
- 私有成员的存在
闭包的缺点：

- 不会被垃圾回收机制回收，增加内存的使用量，使用不当造成内存泄漏

## 38. 箭头函数与普通函数的区别

- 箭头函数是匿名函数，不能作为构造函数，不能使用`new`关键字
- 箭头函数没有`arguments`,可以使用`rest`参数...解决
- 箭头函数没有原型属性
- 箭头函数的`this`永远指向其上下文的`this`,没有办法改变其指向，普通函数的`this`指向调用它的对象
- 箭头函数不能绑定`this`,会捕获其所在的上下文的`this`值，作为自己的`this`值

## 39. ES6 中箭头函数 VS 普通函数的 this 指向

* 普通函数中`this`
  * 总是代表着它的直接调用者，如`obj.fn`, `fn`里的最外层`this`就是指向`obj`
  * 默认情况下，没有直接调用者，`this`指向`window`
  * 严格模式下（设置了`use strict`）, `this`为`undefined`
  * 当使用`call`, `apply`,`bind`（ES5新增）绑定的，`this`指向绑定对象

* `ES6`箭头函数中`this`

  * 默认指向定义它时，所处上下文的对象`this`指向，即 `ES6` 箭头函数里`this`的指向就是上下文里对象`this`指向，偶尔没有上下文对象，`this`就指向`window`


## 40. JS 实现对象（都是简单类型的值）的深拷贝

```js
let newObj = JSON.parse(JSON.stringfy(oldObj))
```

## 41. JSON.parse(JSON.stringify(obj)) 实现深拷贝需要注意的问题

## 42. 手动实现一个深拷贝

## 43. Promise 是做什么的，有哪些API

### 43.1. Promise用法

### 43.2. Promise.prototype.then()

### 43.3. Promise.prototype.catch()

### 43.4. Promise.all()

### 43.5. Promise.race()

### 43.6. Promise.resolve()

### 43.7. Promise.reject()

## 44. Promise不兼容怎么解决

## 45. Ajax 基本流程

## 46. Ajax 的 readyState 的几种状态分别代表什么

## 47. Ajax 禁用浏览器的缓存功能

## 48. 谈谈对前端工程化的理解

## 49. js 的几种模块规范

## 50. ES6 模块与 CommonJS 模块、AMD、CMD 的差异

## 51. webpack 的功能

## 52. webpack 常用插件

## 53. arguments怎么转化成真数组

## 54. js的对象的常用的方法

## 55. js的字符串的常用的方法

## 56. js的数组的常用的方法
