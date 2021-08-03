/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-07-29 10:46:01
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-07-29 10:49:53
 * @Description: file content
 */
import Vue from 'vue';
import Router from 'vue-router';

import index from '../components/Index.vue';
import detail from '../components/Detail.vue';

Vue.use(Router);
// 如果我们在多个请求之间使用一个共享的实例，很容易导致交叉请求状态污染 (cross-request state pollution)。
// 这里导出一个工厂函数， 每个用户请求都需要创建rouer实例

export  default function createRouter() {

}

