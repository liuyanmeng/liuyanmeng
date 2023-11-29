const store =  {
  state:{
    arr:[1,3,5,7,9,11,13,15,17,19,21]
  },
  actions:{
    arrPush(newState:{arr:any},actions:{type:string,val:number}){
      newState.arr.push(actions.val)
    }
  },
  // add:"arrPush"
  actionsName:{} //名字统一管理
}
let actionsName = {}
for(let key in store.actions ){
  actionsName[key] = key
}

store.actionsName = actionsName
export default store