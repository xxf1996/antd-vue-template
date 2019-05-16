<template>
  <section class="layout">
    <a-layout-sider
      class="layout-left"
      width="256px"
      collapsible
      v-model="menuCollapsed"
      :trigger="null"
    >
      <logo class="app-info" :show-title="!menuCollapsed"></logo>
      <side-menu :collapsed="menuCollapsed"></side-menu>
    </a-layout-sider>
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
import Logo from '@/components/common/Logo'

// 普通布局组件：左侧菜单，右侧顶部导航栏，其余区域为主体页面
export default {
  name: 'Layout',
  components: {
    SideMenu,
    TopNav,
    Logo
  },
  data () {
    return {
      menuCollapsed: false
    }
  },
  methods: {
    // 切换左侧菜单收缩状态
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
  box-shadow: #aaa 2px 0 3px 0, #eee 5px 0 5px 0;

  .app-info {
    color: $side-color;
    background-color: $side-bg;
  }
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
