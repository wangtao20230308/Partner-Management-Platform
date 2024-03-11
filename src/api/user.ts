import http from './request'
import request from './request'

// export function login(data) {
//     return request({
//         url: '/vue-element-perfect/user/login',
//         method: 'post',
//         data
//     })
// }
// export function testInterface(data) {
//     return request({
//         url: '/home/banner',
//         method: 'get',
//         data
//     })
// }
// 登入系统模拟接口
interface loginData {
    distributionSite: string,
}
export const testInterface = (params: loginData) =>
    http.request({ url: '/home/banner', method: 'get', params: params })

