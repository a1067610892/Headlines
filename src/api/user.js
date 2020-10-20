/* 用户相关请求模块 */
import request from '@/utils/request.js'

export const login = data => {
  return request({
    method: 'POST',
    url: 'http://ttapi.research.itcast.cn/app/v1_0/authorizations',
    data
  })
}
