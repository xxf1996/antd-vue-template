<template>
  <div class="nav">
    <section class="full-center nav-menu" @click="toggleMenu">
      <a-icon type="menu-fold" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  methods: {
    toggleMenu () {
      this.$emit('toggle-menu')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: relative;
  height: 100%;
  background-color: $header-bg;
  box-shadow: #ccc 0 1px 3px 0;

  .nav-menu {
    width: $header-height;
    height: $header-height;
    font-size: 24px;

    &:hover {
      cursor: pointer;
      background-color: #f6f6f6;
    }
  }
}
</style>
