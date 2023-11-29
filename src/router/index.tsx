/*
 * @Author: YanMeng
 * @Date: 2023-03-19 12:30:58
 * @LastEditors: YanMeng
 * @LastEditTime: 2023-03-25 13:14:19
 * @Description: file content
 * @FilePath: \react-code\viteReact\src\router\index.tsx
 * @Company: 沃尔玛
 */
// 对象形式的写法
// 组件路由懒加载
import React, { lazy} from 'react'
// 组件
import Home from "@/views/Home"
// import About from "@/views/About"
//  直接使用路由懒加载会报错  解决方案：懒加载模式需要我们添加一个loading组件
const About = lazy(()=> import("@/views/About") )
const Page1 = lazy(()=> import("@/views/Page1") )
const Page2 = lazy(()=> import("@/views/Page2") )
const Page3 = lazy(()=> import("@/views/Page3") )
const Login = lazy(()=> import("@/views/Login/index"))
// 重定向组件
import {Navigate} from 'react-router-dom'


// 封装路由懒加载的函数
const withLoadingComponent = (comp:JSX.Element) =>(
  <React.Suspense fallback={<div>loading....</div>} >
    {comp} 
  </React.Suspense>
)
// 封装判断是否登录
const isLogin = () =>{
  if(false){
    return '/login'
  }
  return '/home'
}
const routes =[
  {
    path:'/',
    element: <Navigate to={isLogin()}></Navigate>
  },
  {
    path:'/home',
    element:<Home/>,
  },
  {
      path:'/',
      element:<Home/>,
      children:[
      {
        path:'/page1',
        element:withLoadingComponent(<Page1/>)
      },
      {
        path:'/page2',
        element:withLoadingComponent(<Page2/>)
      },
      {
        path:'/page3',
        element:withLoadingComponent(<Page3/>),
        children:[
          {
            path:'/page3/page301',
            element:withLoadingComponent(<Page3/>)
          },
        ]
      },
    ]
  },
  {
    path:'/login',
    element:withLoadingComponent(<Login/>)
  },
  

]

export default routes