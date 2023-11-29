/*
 * @Author: YanMeng
 * @Date: 2023-04-05 15:54:40
 * @LastEditors: YanMeng
 * @LastEditTime: 2023-04-08 06:27:11
 * @Description: file content
 * @FilePath: \react-code\viteReact\src\store\NumberState\reducer.ts
 * @Company: 沃尔玛
 */
// 引入模块
import handNumber from './index'

const reducer = (state = {...handNumber.state},actions:any) =>{
  let newState = JSON.parse(JSON.stringify(state))
  // 调用dispatch执行这里的代码
  /**
   * 优化switch中的思路
   * 由于switch的做法是那种actions.type和case后面的每一个进行对比，这中做法很像是遍历
   * 
   */
  // switch(actions.type){
  //   case handNumber.add:
  //     handNumber.actions["add"](newState,actions)
  //   break
  //   case handNumber.add2:
  //     handNumber.actions["add2"](newState,actions)
  //   break
  //   default:
  //     break
  // }
  // 优化 switch 的写法，我们每添加一个方法就要添加一个case
  // 拿着actions.type和actionsName的每一项进行对比如果相等就调用模块名.actions[下标](newState,action)
  for(let key in handNumber.actionsName){
    // console.log(key)
    if(actions.type === handNumber.actionsName[key]) {
      handNumber.actions[handNumber.actionsName[key]](newState,actions)
      break
    }
  }

  return newState
}
export default reducer