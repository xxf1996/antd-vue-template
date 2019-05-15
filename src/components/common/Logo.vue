<template>
  <div class="logo">
    <img class="logo-pic" src="~@/assets/logo.png" alt="Logo">
    <span class="logo-name" v-show="showTitle">{{ appName }}</span>
  </div>
</template>

<script>
import utils from '@/utils'

// logo + 网站名称 （居中显示）
export default {
  name: 'Logo',
  props: {
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      appName: utils.APP_NAME // 网站名称
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  height: $header-height;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  line-height: $header-height;

  .logo-pic {
    width: 32px;
    height: 32px;
  }

  .logo-name {
    margin-left: 12px;
  }
}
</style>
