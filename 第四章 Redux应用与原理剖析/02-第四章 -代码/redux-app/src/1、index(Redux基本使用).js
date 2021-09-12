import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
import {createStore} from 'redux'
// 创建Reducer函数，state:表示数据
// action:表示行为。
function Reducer(state=0,action){
   const {type}=action;
   if(type==='ADD'){
      return state+1;
   }else if(type==='SUB'){
     return state-1;
   }else{
     return state;
   }
}
// 创建store, store表示保存数据的地方，看成一个容器。
const store=createStore(Reducer,100)
console.log(store.getState())
// 更新store中的状态。
 setTimeout(function() {
   //dispatch的参数是一个Action.
   store.dispatch({type:'ADD'})
 },1000)
 //当store中的state发生了变化，会自动调用监听的方法。
store.subscribe(()=>{
   render();
}

)

const Counter =(props)=>{
  return(
    <div>
      <h1>{props.value}</h1>
      <button>增加</button>
      <button>递减</button>
    </div>
  )
}
render();
function render(){
  ReactDOM.render(<Counter value={store.getState()}/>, document.getElementById('root'))
}
   


