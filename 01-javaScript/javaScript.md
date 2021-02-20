<!--
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-02-19 11:03:18
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-02-20 10:59:58
 * @Description: file content
-->

<!-- TOC -->

- [1. js数据类型](#1-js数据类型)
- [2. 数据类型相互转换规则](#2-数据类型相互转换规则)
  - [2.1. 其他类型转换成String](#21-其他类型转换成string)
  - [2.2. 其他类型转换成Number](#22-其他类型转换成number)
  - [2.3. 其他类型转换成Boolean](#23-其他类型转换成boolean)
- [3. 基本数据类型与引用数据类型的区别？](#3-基本数据类型与引用数据类型的区别)
- [4. typeof能否正确判断数据类型？instanceof 能判断对象的原理是什么](#4-typeof能否正确判断数据类型instanceof-能判断对象的原理是什么)
- [5. 手写instanceof](#5-手写instanceof)
- [6. 理解原型链](#6-理解原型链)
- [7. javaScript 继承的几种实现方式](#7-javascript-继承的几种实现方式)
- [8. null 和 undefined 的区别](#8-null-和-undefined-的区别)
- [9. js 遍历对象和遍历数组的方式](#9-js-遍历对象和遍历数组的方式)
- [10. {} 和 [] 的 valueOf 和 toString 的结果是什么](#10--和--的-valueof-和-tostring-的结果是什么)

<!-- /TOC -->
## 1. js数据类型

js 分两种数据类型：
  6种基本数据类型：`Number`、 `Boolean`、 `String`、 `undefined`、 `null`、 `Symbol` 其中 `Symbol` 类型，代表创建后独一无二且不可变的数据类型，它的出现我认为主要是为了解决可能出现的全局变量冲突的问题。
  引用数据类型：`Object`(在JS中除了基本数据类型以外的都是对象)

## 2. 数据类型相互转换规则

### 2.1. 其他类型转换成String

- `null`和`undefined`类型：`null`转换成"null"，`undefined`转换为"undefined"
- `Number`类型：直接转换，不过极小极大的数字会使用指数形式
- `Boolean`类型：`true`转换为"true", `false`转换为"false"
- `Symbol`类型：直接转换，只允许显式强制类型转换，使用隐式类型转换会产生错误
- 对普通对象来说，除非自行定义`toString()`方法，否则会调用toString()（Object.prototype.toString()）来返回内部属性[[Class]]的值，如"[Object Object]"。如果对象有自己的toString()方法，字符串化时就会调用该方法并使用其返回值。

### 2.2. 其他类型转换成Number

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

### 2.3. 其他类型转换成Boolean

假值：`undefined`、`null`、`false`、`+0`、`-0`、`NaN`、`""`

假值转换结果为`false`,假值以为的都应该是真值

## 3. 基本数据类型与引用数据类型的区别？

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

## 4. typeof能否正确判断数据类型？instanceof 能判断对象的原理是什么

- typeof 对于基本数据类型来说，除了null都可以显示正确的类型，typeof null 返回一个'object'，所以typeof 并不能准确判断变量到底是什么类型
- typeof 对于引用类型来说，除了函数都会显示object,typeof console.log 返回一个'function'，instanceof可以正确判断一个数的数据类型，因为内部机制是通过原型链来判断的

## 5. 手写instanceof

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

## 6. 理解原型链

理解原型链首先理解这张图：

![prototype](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3842555d9aef47af98102f763b2b88ff~tplv-k3u1fbpfcp-watermark.image)

首先理解：构造函数，原型对象，实例对象之间的关系

- 对象都有一个`__proto__`属性
- 构造函数才有原型对象`prototype`
- 实例对象`f1`是通过构造函数`Foo()` `new`出来的，实例对象有一个`__proto__`属性，指向构造函数的原型对象，即`f1.__proto__ === Foo.prototype`
- `prototype`本身也是一个对象，它也有`__proto__`,依次向上找会找到`Object.prototype`, `Object.prototype`在向上找就是`null`了，按此查找形成的链条就是原型链
- 原型对象有一个`constructor`指向构造函数本人，构造函数也是对象，同样也就用`__proto__`指向`Function.prototype`
- `__proto__`先指向构造函数的原型对象，最后再指向`Object.prototype`

## 7. javaScript 继承的几种实现方式

- 原型链继承：有一定的缺点：原型中包含的引用值会在所有的实例间共享，容易造成修改修改混乱。还有子类型在实例化时不能给父类型的构造函数传参。
- 借用构造函数继承：借用构造函数的一个优点就是可以在子类构造函数中向父类构造函数传参。借用构造函数的主要缺点，也是使用构造函数模式自定义类型的问题：必须在构造函数中定义方法，因此函数不能重用。此外，子类也不能访问父类原型上定义的方法，因此所有类型只能借用构造函数模式。
- 组合继承：
- 原型式继承：
- 寄生式继承：
- 寄生式组合继承：

## 8. null 和 undefined 的区别

## 9. js 遍历对象和遍历数组的方式

## 10. {} 和 [] 的 valueOf 和 toString 的结果是什么
