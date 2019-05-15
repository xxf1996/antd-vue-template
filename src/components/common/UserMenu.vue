<template>
  <a-dropdown class="user">
    <div class="user-info">
      <img class="user-avatar" v-if="avatar && avatar!== ''" :src="avatar" alt="user">
      <img class="user-avatar" v-else src="~@/assets/logo.png" alt="user">
      <span class="user-name">{{ username }}</span>
    </div>
    <a-menu slot="overlay" class="user-dropdown">
      <!-- <a-menu-item key="1">
        <a href="javascript:;">
          <a-icon type="setting"/>
          <span style="margin-left: 6px;">更改密码</span>
        </a>
      </a-menu-item> -->
      <a-menu-item key="2">
        <a href="javascript:;" @click="userLogout">
          <a-icon type="logout"/>
          <span style="margin-left: 6px;">退出登录</span>
        </a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { mapState } from 'vuex'
import { logout } from '@/api/user'
import utils from '@/utils'

// 用户操作菜单
export default {
  name: 'UserMenu',
  computed: {
    ...mapState('user', [
      'userInfo'
    ]),
    avatar () {
      return this.userInfo.avatar
    },
    username () {
      return this.userInfo.username
    }
  },
  methods: {
    // 用户退出登录操作
    userLogout () {
      logout().then(() => {
        utils.cookies.remove('token')
        this.$router.push({ name: 'login' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  height: $header-height;
  padding: 0 12px;
  font-size: 12px;
  color: #666;
  line-height: $header-height;

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .user-name {
    margin-left: 12px;
  }
}
</style>
