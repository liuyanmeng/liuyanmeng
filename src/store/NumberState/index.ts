/*
 * @Author: YanMeng
 * @Date: 2023-04-06 19:25:51
 * @LastEditors: YanMeng
 * @LastEditTime: 2023-04-14 13:12:24
 * @Description: file content
 * @FilePath: \react-code\viteReact\src\store\NumberState\index.ts
 * @Company: 沃尔玛
 */
 const store =  {
  state:{
    num:20
  },
  actions:{//放同步代码
    add(newState:{num:number},actions:{type:string}){
      newState.num++
    },
    add2(newState:{num:number},actions:{type:string,val:number}){
      newState.num +=actions.val
    }
  },
  // 放异步函数代码  优化redux-thunk的异步写法
  asyncActions:{
    asyncAdd1(dispatch:Function){
      setTimeout(()=>{
        dispatch({type:'add'})
      },1000)
    }
  },
  actionsName:{}
}

let actionsName = {};
for(let key in store.actions){
  actionsName[key] = key
}
console.log('ssss',actionsName)
store.actionsName = actionsName
export default store