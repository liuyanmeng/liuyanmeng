/*
 * @Author: YanMeng
 * @Date: 2023-03-10 08:04:55
 * @LastEditors: YanMeng
 * @LastEditTime: 2023-04-05 16:01:13
 * @Description: file content
 * @FilePath: \react-code\viteReact\src\main.tsx
 * @Company: 沃尔玛
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
// 初始化样式
import 'reset-css'
import '@/assets/styles/global.scss'
// Ui框架样式
// import 'antd/dist/reset.css';
// 组件样式
import App from './App'
// import Router from './router'
// 对象式写法
import { BrowserRouter } from 'react-router-dom'

// 引入数据仓库
import { Provider } from 'react-redux'
import store from './store'
const stores:any = store
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>,
)
