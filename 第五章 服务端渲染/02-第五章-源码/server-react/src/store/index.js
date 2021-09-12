import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
// const reducer=(state={userName:'zhangsan'},action)=>{
//     return state
// }
import homeReducer from '../components/Home/store/reducer'
const reducer=combineReducers({
    homeReducer
})
 export const store=createStore(reducer,applyMiddleware(thunk));
   export const getClientStore=()=>{
       const defaultState=window.contextData.state;//脱水
       
       return createStore(reducer,defaultState,applyMiddleware(thunk))
   }
//  export default store