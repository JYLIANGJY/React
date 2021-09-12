import React from 'react';
import ReactDOM from 'react-dom';
 import App from './App'
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
const store=createStore(rootReducer,applyMiddleware(logger))

const dispatch=store.dispatch;
store.dispatch=function(action) {
    console.log('actionInfo=',action);
    dispatch(action)
    console.log('state=',store.getState())
}

console.log(store.getState())
// setTimeout(function() {
//   store.dispatch({type:'ADD_CHAT',playload:'Hello'})
// },1000)
setTimeout(function() {
  store.dispatch({type:'CHANGE_USERNAME',playload:'zhangsan'})
},1000)
store.subscribe(()=>{
  console.log(store.getState())
})
  ReactDOM.render(<App/>, document.getElementById('root'))

   


