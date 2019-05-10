<template>
  <div class="menu">

  </div>
</template>

<script>
import { getMenu } from '@/utils/menu'

export default {
  name: 'SideMenu',
  created () {
    console.log(getMenu())
  }
}
</script>

<style lang="scss" scoped>

</style>
