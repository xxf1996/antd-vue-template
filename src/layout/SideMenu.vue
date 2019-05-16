<template>
  <a-menu
    class="menu"
    mode="inline"
    theme="dark"
    :inlineCollapsed="collapsed"
    :defaultSelectedKeys="[curPath]"
    :defaultOpenKeys="curSub">
    <template v-for="item in menus">
      <sub-menu
        v-if="!!item.children"
        :key="item.name"
        :menu-key="item.name"
        :info="item"
        :click-menu="clickMenu">
      </sub-menu>
      <a-menu-item
        v-else
        :key="item.name"
        :title="item.title"
        @click.native="clickMenu(item.path)">
        <a-icon v-if="item.icon" :type="item.icon"></a-icon>
        <span>{{ item.title }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>

<script>
import { getMenu, flatMenu } from '@/utils/menu'
import SubMenu from './SubMenu'

// 侧边菜单
export default {
  name: 'SideMenu',
  components: {
    SubMenu
  },
  props: {
    // 菜单收缩状态
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      menus: getMenu() // 获取菜单信息
    }
  },
  computed: {
    // 当前路由组件的name
    curPath () {
      return this.$route.name
    },
    // 展开后的菜单信息Map
    flatMenus () {
      return flatMenu(this.menus)
    },
    // 当前展开的子菜单项
    curSub () {
      let curMenu = this.flatMenus.get(this.curPath)
      // console.log(curMenu)
      return curMenu.parent ? [curMenu.parent] : []
    }
  },
  methods: {
    // 点击菜单项触发路由跳转
    clickMenu (path) {
      this.$router.push(path)
    }
  },
  created () {
    console.log(this.menus, this.flatMenus)
  }
}
</script>

<style lang="scss" scoped>

</style>
