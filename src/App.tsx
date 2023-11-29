/*
 * @Author: YanMeng
 * @Date: 2023-03-10 08:04:55
 * @LastEditors: YanMeng
 * @LastEditTime: 2023-04-14 13:57:52
 * @Description: file content
 * @FilePath: \react-code\viteReact\src\App.tsx
 * @Company: 沃尔玛
 */
import { useEffect, useState } from 'react'
import{ Button} from 'antd'
import {useRoutes,useLocation,useNavigate} from 'react-router-dom'
import routes from './router'

function ToPage1 (){
  const navigateTo = useNavigate()
  useEffect(()=>{
    navigateTo("/page1")
  },[])
  return <div></div>
}

function Login1() {
  const navigateTo = useNavigate()
  useEffect(()=>{
    navigateTo("/login")
  },[])
  return <div></div>
}




// 封装路由守卫
function BeforeRouterEnter() {
  const outlet = useRoutes(routes)
  let token = localStorage.getItem('token')
  const location = useLocation()
  // if(location.pathname==='/login' && token){
  //   return <ToPage1 />
  // }
  // if(location.pathname !=='/login' && !token){
  //   return <Login1/>
  // }
  return outlet
}
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div className="App">
      {/* <Link to='/home'>home</Link>
      <Link to='/about'>about</Link> */}
      {/* {
        outlet
      } */}
      <BeforeRouterEnter />
    </div>
  )
}

export default App
//  Outlet 占位符组件，类似于窗口，用来展示组件的，相当于Vue中的router-view