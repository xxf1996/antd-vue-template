<template>
  <div class="page">
    <router-view></router-view>
  </div>
</template>

<script>
// 普通的二级路由页面容器
export default {
  name: 'RoutePage'
}
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
