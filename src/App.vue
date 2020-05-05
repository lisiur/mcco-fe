<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="less">
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  height: 100%;
}
.el-header {
  padding: 0 !important;
}
</style>
