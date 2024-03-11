// import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
// import { ElMessage } from "element-plus";
// import { useUserStore } from "@/store/modules/user"
// // 创建axios实例 进行基本参数配置
// const service = axios.create({
//     // 默认请求地址，根据环境的不同可在.env 文件中进行修改
//     // baseURL: import.meta.env.VUE_APP_BASE_API,
//     baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
//     // 设置接口访问超时时间
//     timeout: 3000000, // request timeout，
//     // 跨域时候允许携带凭证
//     withCredentials: true,
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//         'source-client': 'miniapp',
//     }
// })

// //  request interceptor 接口请求拦截
// service.interceptors.request.use((config: AxiosRequestConfig) => {
//     /**
//      * 用户登录之后获取服务端返回的token,后面每次请求都在请求头中带上token进行JWT校验
//      * token 存储在本地储存中（storage）、vuex、pinia
//      */
//     const userStore = useUserStore();
//     const token: string = userStore.token;
//     // 自定义请求头
//     if (token) { config.headers['Authorization'] = token }
//     return config
// }, (error: AxiosError) => {
//     // 请求错误，这里可以用全局提示框进行提示
//     return Promise.reject(error);
// })

// //  response interceptor 接口响应拦截
// service.interceptors.response.use((response: AxiosResponse) => {
//     // 直接返回res，当然你也可以只返回res.data
//     // 系统如果有自定义code也可以在这里处理
//     return response


// }, (error: AxiosError) => {
//     return Promise.reject(error)
// })


// /**
//  * @description 显示错误消息
//  * opt 传入参数
//  * err 错误信息
//  * type 消息类型
//  * duration 消息持续时间
//  */
// function showErrMessage(opt, err, type: any = 'error', duration: number = 5000) {
//     ElMessage({
//         message: err.msg,
//         type: type,
//         duration: duration
//     })
// }

// export default service
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Loading } from 'element-plus/es/components/loading/src/service';

let loading = null;

class HttpRequest {
    private readonly baseUrl: string;
    constructor() {
        this.baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,// 所有的请求地址前缀部分(没有后端请求不用写)  
            timeout: 80000, // 请求超时时间(毫秒)
            withCredentials: false,// 异步请求携带cookie，关闭解决前端请求跨域问题
            headers: {
                // 设置后端需要的传参类型
                'Content-Type': 'application/json;charset=utf-8',
                // 'token': 'x-auth-token', //一开始就要token
                // 'X-Requested-With': 'XMLHttpRequest',
            },
        }
        return config
    }

    // 请求拦截
    interceptors(instance: AxiosInstance, url: string | number | undefined) {
        instance.interceptors.request.use(config => {
            // 添加全局的loading..
            loading = Loading({
                lock: true,
                text: 'Loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            // 请求头携带token
            config.headers = config.headers || {}
            if (localStorage.getItem('token')) {
                config.headers.token = localStorage.getItem('token') || ''
            }
            return config
        }, (error: any) => {
            return Promise.reject(error)
        })
        //响应拦截
        instance.interceptors.response.use(res => {
            if (res.data.code !== '1') {
                ElMessage.error(res.data.msg)
                return Promise.reject(res.data)
            }
            //返回数据
            const { data } = res
            console.log('返回数据处理', res)
            loading.close();
            return data
        }, (error: any) => {
            console.log('error==>', error)
            return Promise.reject(error)
        })
    }

    request(options: AxiosRequestConfig) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

const http = new HttpRequest()

export default http

// 'source-client': 'miniapp',

// import axios from 'axios'

// //创建axios实例
// const service = axios.create({
//     baseURL: '/',
//     timeout: 5000,
//     headers: { 'Content-Type': 'application/json;charset=utf-8' }
// })

// //请求拦截
// service.interceptors.request.use((config) => {
//     console.log("请求拦截器", config);

//     config.headers = config.headers || {}
//     if (localStorage.getItem('token')) {
//         config.headers.token = localStorage.getItem('token') || ''
//     }
//     return config
// })
// //响应拦截
// service.interceptors.response.use((res) => {
//     console.log("响应拦截器", res);

//     const code: number = res.data.code
//     if (code !== 0) {
//         ElMessage.error(res.data.message)
//         return Promise.reject(res.data)
//     }
//     return res
// }, (error) => {
//     console.log(error)
// })

// export default service

// // api
// import request from '../utils/request'

// interface loginData {
//     username: string,
//     password: string
// }

// // 登入系统模拟接口
// export const loginToken = (params: loginData) =>
//     request({ url: '/api/login', method: 'get', params: params })
