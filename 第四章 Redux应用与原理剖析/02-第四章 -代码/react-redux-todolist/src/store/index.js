import {createStore,applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
import reducer from './reducer'
const store = createStore(reducer)
// const store = createStore(reducer,applyMiddleware(thunk))
export default store

//1、store是唯一的
// 2、只有store能够修改自己的内容。
// 3、Reducer函数必须是纯函数。