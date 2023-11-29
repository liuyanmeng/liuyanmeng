import axios from 'axios';
import store from '@/store';
import { useNavigate } from 'react-router-dom'
// import qs from 'qs'

// 通过局部引入Element 的Message 组件功能
// import {Message } from 'element-ui'


// 引入router 
import router from '@/router'

// create创建axios 示例
const navigateTo = useNavigate()
const requst =  axios.create({
    timeout:5000,
    // baseURL:
    // headers:
})

/**
 * 
 * @param {*} url 
 * @returns 
 *  封装baseUrl
 */

const getBaseURL =(url:string)=>{
    if(url.startsWith('/boss')){
        return 'http://eduboss.lagou.com'
    }else{
        return 'http://edufront.lagou.com'
    }
}

/**
 * 封装跳转登录页的逻辑
 */

const redirectLogin =()=>{
  navigateTo('/login')
}


// 存储是否正在更新 token 的状态(默认是不在)
let isRefreshing = false;

// 存储因为等待 Token 刷新而挂起的请求

let requestArr:any=[];


// 请求拦截器
requst.interceptors.request.use(function (config){
    // 判断config.url的后缀。来进行baseURL 的设置
    // config.baseURL = getBaseURL(config.url)
    // 统一设置Token 信息
    // const {user} = store.state;
    // if(user && user.access_token){
    //     config.headers.Authorization = user.access_token
    // }
    return config
})

// 设置响应拦截器 设置token过期的操作
requst.interceptors.response.use((res)=>{
    // console.log('响应成功了0',res)
    return Promise.resolve(res)
},(error)=>{
    // console.log('响应失败了0',error)
    if(error.response){
        // 请求发送成功，响应接收完毕，但状态码为失败的情况
        /**
         * 1、判断失败的状态码情况 （主要处理Token过去的情况）
         */
        const { status } = error.response;
        let errorMessage ='';
        if(status == 400){
            errorMessage="请求参数错误"
        }else if(status ==401){
            // 1、没有token信息
            if(!store){
                // router.push({
                //     name:'login',
                //     query:{
                //         // currentRoute 就是存储了路由信息的对象
                //         redirect:router.currentRoute.fullPath
                //     }
                // })
                redirectLogin()
            }
            // 检测是否已经存在了正在刷新 Token 的请求
            if(isRefreshing){
                // 将当前失败的请求存储到请求列表中
                requestArr.push(()=>{
                    // 当前函数调用后，会自动发送本次失败的请求
                    requst(error.config)
                })
                return
            }
            // 2、Token无效
            // 发送请求，获取新的token
            isRefreshing = true
            return  requst({
                method:'POST',
                url:'/front/user/refresh_token',
                // data:qs.stringify({
                //     // refreshtoken:store.state.user.refresh_token
                // })
            }).then(res=>{
                console.log('获取请求',res)
                // 刷新 token 失败
                
                if(res.data.state !=1){
                    // 清除无效用户
                    // store.commit('setUser',null)
                    // redirectLogin()
                    return Promise.reject(error)
                }
                // 刷新token 成功
                // 储存新的 token 
                // store.commit('setUser',res.data.content)
               /**
                * error.config 本次失败请求的配置对象
                * 重新发送失败的请求
                */
                // requestArr.forEach(callback=>callback())
                // 发送完毕清除 requestArr
                requestArr=[]
                // 将本次请求发送
             return requst(error.config)
            }).catch (err=>{
                console.log(err)
            }).finally(()=>{
                // 请求发送完毕，将储存的状态设置为初始状态
                isRefreshing = false
            })
            
        }else if(status ==403){
            errorMessage="没有权限请联系管理员"
        }else if(status ==404){
            errorMessage="请求资源不存在"
        }else if(status >= 500){
            errorMessage="服务端错误，请联系管理员"
        }

        // Message.error(errorMessage)


    }else if(error.request){
        // 请求发送成功，但是未收到响应
        // Message.error('请求超时，请重试')
    }else{error.reques
        // 意料之外的错误
        // Message.error(error.message)
    }
    // 将本次的错误对象继续向后抛出，让接收响应的处理函数进行操作
    return Promise.reject(error)
})



export default requst