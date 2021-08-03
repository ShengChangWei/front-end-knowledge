<!--
 * @Author: shengCW
 * @Email: 2367896538@qq.com
 * @Date: 2021-07-29 10:41:38
 * @LastEditors: shengCW
 * @LastEmail: 2367896538@qq.com
 * @LastEditTime: 2021-07-29 16:28:25
 * @Description: file content
-->
<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
