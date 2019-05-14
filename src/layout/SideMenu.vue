<template>
  <a-menu
    class="menu"
    mode="inline"
    theme="dark"
    :inlineCollapsed="collapsed"
    :defaultSelectedKeys="[curPath]"
    :defaultOpenKeys="[]"
    :style="menuStyle">
    <template v-for="item in menus">
      <sub-menu
        v-if="!!item.children"
        :key="item.name"
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
import { getMenu } from '@/utils/menu'
import SubMenu from './SubMenu'

export default {
  name: 'SideMenu',
  components: {
    SubMenu
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      menus: getMenu()
    }
  },
  computed: {
    curPath () {
      return this.$route.name
    },
    menuStyle () {
      let style = {
        'box-shadow': '#aaa 2px 0 3px 0, #eee 5px 0 5px 0'
      }
      if (this.collapsed) {
        style.width = '80px'
      }
      return style
    },
    menusMap () {
      let res = new Map()
      for (let menu of this.menus) {
        res.set(menu.name, menu)
      }
      return res
    }
  },
  methods: {
    clickMenu (path) {
      this.$router.push(path)
    }
  },
  created () {
    console.log(this.menus, this.curPath)
  }
}
</script>

<style lang="scss" scoped>

</style>
