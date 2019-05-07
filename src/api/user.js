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
