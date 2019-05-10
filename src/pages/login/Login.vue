<template>
  <a-form :form="loginForm" @submit="handleLogin">
    <a-form-item label="账号">
      <a-input placeholder="账号" size="large" v-decorator="loginRule.user">
        <a-icon slot="prefix" type="user"></a-icon>
      </a-input>
    </a-form-item>
    <a-form-item label="密码">
      <a-input type="password" placeholder="密码" size="large" v-decorator="loginRule.password">
        <a-icon slot="prefix" type="lock"/>
      </a-input>
    </a-form-item>
    <a-form-item label="验证码">
      <a-input placeholder="验证码" size="large" v-decorator="loginRule.inputCode" autocomplete="off">
        <a-icon slot="prefix" type="robot"/>
        <identify slot="addonAfter" :identifyCode="identifyCode" :content-width="80" :content-height="35" @click.native="refreshCode"></identify>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" block htmlType="submit">确定</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import Identify from './Identify'
import { login } from '@/api/user'
import utils from '@/utils'

export default {
  components: {
    Identify
  },
  data () {
    const checkCode = (rule, val, callback) => {
      if (val !== this.identifyCode) {
        callback(new Error('验证码错误！'))
      } else {
        callback()
      }
    }

    return {
      loginForm: this.$form.createForm(this),
      identifyCode: '',
      code: '1234567890abcdefghijklmnopqrstuvwsyz',
      loginRule: {
        user: [
          'username',
          {
            rules: [
              { required: true, message: '请输入账号！', trigger: 'blur' }
            ]
          }
        ],
        password: [
          'password',
          {
            rules: [
              { required: true, message: '请输入密码！', trigger: 'blur' }
            ]
          }
        ],
        inputCode: [
          'inputCode',
          {
            rules: [
              // { required: true, message: '请输入验证码！', trigger: 'blur' },
              { trigger: 'blur', validator: checkCode }
            ]
          }
        ]
      }
    }
  },
  methods: {
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode () {
      this.identifyCode = ''
      this.makeCode(4)
    },
    makeCode (l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.code[this.randomNum(0, this.code.length)]
      }
    },
    handleLogin (e) {
      e.preventDefault()
      if (this.loginForm.getFieldValue('inputCode') !== this.identifyCode) {
        return
      }
      this.loginForm.validateFields(['username', 'password'], { force: true }, (err, val) => {
        if (!err) {
          login(val).then(res => {
            utils.saveLogin(res.token)
            // 更新路由 尝试去获取需要重定向的页面完整地址
            const path = this.$route.params.redirect
            // 根据是否存有重定向页面判断如何重定向
            this.$router.replace(path ? { path } : '/index')
            console.log(res)
          })
        }
      })
    }
  },
  created () {
    this.makeCode(4)
  },
  mounted () {
    this.loginForm.setFieldsValue({
      username: 'admin',
      password: 'admin',
      inputCode: ''
    })
  }
}
</script>
