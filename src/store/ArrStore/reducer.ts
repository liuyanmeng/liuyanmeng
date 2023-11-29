/*
 * @Author: YanMeng
 * @Date: 2023-04-08 05:59:00
 * @LastEditors: YanMeng
 * @LastEditTime: 2023-04-08 06:42:47
 * @Description: file content
 * @FilePath: \react-code\viteReact\src\store\ArrStore\reducer.ts
 * @Company: 沃尔玛
 */
// 引入模块
import handArr from './index'

const reducer = (state = {...handArr.state},actions:any) =>{
  let newState = JSON.parse(JSON.stringify(state))
  // switch(actions.type){
  //   case handArr.add:
  //     handArr.actions["add"](newState,actions)
  //   break
  //   default:
  //     break
  // }
  for(let key in handArr.actionsName){
    if(actions.type === handArr.actionsName[key]){
      handArr.actions[handArr.actionsName[key]](newState,actions)
    }
  }
  return newState
}
export default reducer