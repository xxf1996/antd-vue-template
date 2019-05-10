import log from './log'
import cookies from './cookies'
import packageInfo from '../../package.json'

/**
 * 用于验证是否有用户已经登录且在登录有效期内
 */
function isLogin () {
  // 这里暂时将cookie里是否存有token作为验证是否登录的条件
    // 请根据自身业务需要修改
    const token = cookies.get('token')
    return token && token !== 'undefined'
}

/**
 * 保存用户登录成功后的依据
 * @param {string} token 用户登录成功后返回的token
 */
function saveLogin (token) {
  cookies.set('token', token)
}

/**
 * 设置页面标题
 * @param {string} title 标题
 */
function setTitle (title) {
  window.document.title = `${packageInfo.appName || 'xxx平台'}${title ? ` | ${title}` : ''}`
}

export default {
  log,
  cookies,
  isLogin,
  saveLogin,
  setTitle
}
