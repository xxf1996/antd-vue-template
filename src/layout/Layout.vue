<template>
  <section class="layout">
    <section class="layout-left">
      <side-menu></side-menu>
    </section>
    <section class="layout-right">
      <section class="layout-nav"></section>
      <section class="class-layout-main">
        <router-view></router-view>
      </section>
    </section>
  </section>
</template>

<script>
import SideMenu from './SideMenu'

export default {
  name: 'Layout',
  components: {
    SideMenu
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
}
.layout-right {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
}
.layout-nav {
  height: 40px;
}
.layout-main {
  flex: 1;
}
</style>
