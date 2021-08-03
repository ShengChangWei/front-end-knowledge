/*
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-07-29 16:04:31
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-07-29 16:06:56
 * @Description: file content
 */

// 引入相关依赖
const express = require('express');
const Vue = require('vue');
const fs = require('fs');

// 创建express实例和vue实例
const app = express();
// 创建渲染器
const {createBundleRenderer} = require('vue-server-renderer');