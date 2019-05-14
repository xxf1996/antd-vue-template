<template functional>
  <a-sub-menu>
    <span slot="title">
      <a-icon v-if="props.info.icon" :type="props.info.icon"></a-icon>
      <span>{{ props.info.title }}</span>
    </span>
    <template v-for="item in props.info.children">
      <sub-menu 
        v-if="!!item.children"
        :key="item.name"
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
export default {
  name: 'SubMenu',
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    clickMenu: {
      type: Function,
      default: (path) => {
        console.log(path)
      }
    }
  }
}
</script>
