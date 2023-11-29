/*
 * @Author: YanMeng
 * @Date: 2023-03-10 08:04:55
 * @LastEditors: YanMeng
 * @LastEditTime: 2023-04-18 10:09:46
 * @Description: file content
 * @FilePath: \react-code\viteReact\vite.config.ts
 * @Company: 沃尔玛
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import styleImport,{AntdResolve} from 'vite-plugin-style-import'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleImport({
      resolves:[
        AntdResolve() // antd的按需引入
      ]
    })
  ],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src') // 自动引入文件设置
    }
  }
})
