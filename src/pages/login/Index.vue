<template>
  <div class="login">
    <login></login>
  </div>
</template>

<script>
import Login from './Login'

export default {
  components: {
    Login
  }
}
</script>


<style scoped>
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    transform: translate(-50%, -50%);
  }
</style>