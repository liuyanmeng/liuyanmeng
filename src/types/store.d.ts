/*
 * @Author: YanMeng
 * @Date: 2023-04-06 19:17:03
 * @LastEditors: YanMeng
 * @LastEditTime: 2023-04-06 19:20:05
 * @Description: file content
 * @FilePath: \react-code\viteReact\src\types\store.d.ts
 * @Company: 沃尔玛
 */
//  [] 类型声明里面不要直接使用引入import ..... from .....
// 而是使用import("@/xxx")

// TS提供了ReturnType 用来获取函数的返回值

type RootState = ReturnType<typeof import("@/store").getState>