/*
 * @Author: YanMeng
 * @Date: 2023-03-19 12:30:01
 * @LastEditors: YanMeng
 * @LastEditTime: 2023-03-19 12:30:32
 * @Description: file content
 * @FilePath: \react-code\viteReact\src\views\About.tsx
 * @Company: 沃尔玛
 */
// 函数组件
// 快捷键Ctrl+Win+i 添加注释
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';

function About() {
    const [xxx, setXxx] = useState('')

    useEffect(() => {
        console.log('函数组件来咯')
    }, [])

    return (
        <div className='content'>
          <p>这是about页面</p>
        </div>
    )
}

export default About