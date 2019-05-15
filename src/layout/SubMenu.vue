<template functional>
  <a-sub-menu :key="props.menuKey">
    <span slot="title">
      <a-icon v-if="props.info.icon" :type="props.info.icon"></a-icon>
      <span>{{ props.info.title }}</span>
    </span>
    <template v-for="item in props.info.children">
      <sub-menu 
        v-if="!!item.children"
        :key="item.name"
        :menu-key="item.name"
        :info="item">
      </sub-menu>
      <a-menu-item
        v-else
        :key="item.name"
        :title="item.title"
        @click.native="props.clickMenu(item.path)">
        <a-icon v-if="item.icon" :type="item.icon"></a-icon>
        <span>{{ item.title }}</span>
      </a-menu-item>
    </template>
  </a-sub-menu>
</template>

<script>
// 自递归调用的子菜单组件（函数式组件）
export default {
  name: 'SubMenu',
  props: {
    // 子菜单数组信息
    info: {
      type: Object,
      default: () => ({})
    },
    // a-sub-menu的key属性，一般用于展开子菜单
    menuKey: {
      type: String,
      default: ''
    },
    // 点击菜单项的操作函数
    clickMenu: {
      type: Function,
      default: (path) => {
        console.log(path)
      }
    }
  }
}
</script>
