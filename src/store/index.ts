import {legacy_createStore,combineReducers,applyMiddleware} from 'redux'
// 引入redux-chunk 支持异步操作
import reduxThunk from "redux-thunk"
import NumReducer from './NumberState/reducer'
import  ArrReducer from './ArrStore/reducer'
// 合并所有的reducer 
const reducer = combineReducers({
  NumReducer,
  ArrReducer
})
// 创建数据仓库
const store =  legacy_createStore(reducer,applyMiddleware(reduxThunk))

export default store