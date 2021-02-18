# js基础

## 1、数据类型
### 6种基本数据类型：
  * Number
  * Boolean
  * String
  * undefined
  * null
  * Symbol

null 不是对象类型，typeof null 会输出object

### 引用数据类型

* Object
* Arrary
* Function

### 问题：

#### 基本数据类型与引用数据类型之间的区别？

#### typeof 是否你能正确判断类型？instanceof 能判断对象的原理是什么？手写一个instanceof

* typeof 对于基本数据类型来说，除了null都可以显示正确的类型，typeof null 返回一个'object'
* typeof 对于引用类型来说，除了函数都会显示`object`,typeof console.log 返回一个'function'
* 所以typeof 并不能准确判断变量到底是什么类型

* instanceof可以正确判断一个数的数据类型，因为内部机制是通过原型链来判断的

* 手写instanceof 如下：

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

#### 理解原型链

