import request from '@/utils/request'

/**
 * 用户登录验证
 * @param {object} params 用户登录信息
 */
export function login (data) {
  return request({
    method: 'post',
    url: '/api/login',
    data
  })
}

/**
 * 退出当前登录
 */
export function logout () {
  return request({
    method: 'delete',
    url: '/api/logout'
  })
}

/**
 * 获取已登录的用户信息（根据session）
 */
export function getInfo () {
  return request({
    method: 'get',
    url: '/api/user'
  })
}
