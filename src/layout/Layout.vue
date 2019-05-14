<template>
  <section class="layout">
    <side-menu class="layout-left" :collapsed="menuCollapsed"></side-menu>
    <section class="layout-right">
      <section class="layout-nav">
        <top-nav @toggle-menu="toggleCollapsed"></top-nav>
      </section>
      <section class="layout-main">
        <router-view></router-view>
      </section>
    </section>
  </section>
</template>

<script>
import SideMenu from './SideMenu'
import TopNav from './TopNav'

export default {
  name: 'Layout',
  components: {
    SideMenu,
    TopNav
  },
  data () {
    return {
      menuCollapsed: false
    }
  },
  methods: {
    toggleCollapsed () {
      this.menuCollapsed = !this.menuCollapsed
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
}
.layout-left {
  width: 256px;
}
.layout-right {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
}
.layout-nav {
  height: 64px;
}
.layout-main {
  flex: 1;
  box-sizing: border-box;
  padding: 16px;
}
</style>
