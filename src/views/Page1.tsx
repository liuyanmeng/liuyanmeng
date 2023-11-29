/*
 * @Author: YanMeng
 * @Date: 2023-03-20 12:30:14
 * @LastEditors: YanMeng
 * @LastEditTime: 2023-04-14 13:19:10
 * @Description: file content
 * @FilePath: \react-code\viteReact\src\views\Page1.tsx
 * @Company: 沃尔玛
 */
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import numStore from '@/store/NumberState/index'

function Page1() {
    const [xxx, setXxx] = useState('')
     const {num,arr} = useSelector((state:RootState)=>({
      num:state.NumReducer.num,
      arr:state.ArrReducer.arr
     }))
    const disPath = useDispatch()
    console.log(num)
    useEffect(() => {
        console.log('函数组件来咯')
    }, [])
    const add = () =>{
      disPath({type:'add2',val:3})
    }
    const add1 = () =>{
      disPath({type:'arrPush',val:300})
    }
    const addAsync = () =>{
      // 异步的写法 redux-thunk的用法
      // disPath((dis:Function)=>{
      //   setTimeout(()=>{
      //     dis({type:'add'})
      //   },1000)
      // })
      // 调用优化后的代码
      disPath(numStore.asyncActions.asyncAdd1)
    }

    return (
        <div className='content'>
          <p>Page1页面----{num}</p>
          <button onClick={add}>按钮</button>
          <p>{arr}</p>
          <button onClick={add1}>按钮cccc</button>
          <button onClick={addAsync}>异步按钮cccc</button>
        </div>
    )
}

export default Page1