/*
 * @Author: YanMeng
 * @Date: 2023-03-20 12:30:14
 * @LastEditors: YanMeng
 * @LastEditTime: 2023-03-20 12:36:31
 * @Description: file content
 * @FilePath: \react-code\viteReact\src\views\Page2.tsx
 * @Company: 沃尔玛
 */
// 函数组件
// 快捷键Ctrl+Win+i 添加注释
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';

function Page1() {
    const [xxx, setXxx] = useState('')

    useEffect(() => {
        console.log('函数组件来咯')
    }, [])

    return (
        <div className='content'>
          <p>Page22222222222页面</p>
        </div>
    )
}

export default Page1