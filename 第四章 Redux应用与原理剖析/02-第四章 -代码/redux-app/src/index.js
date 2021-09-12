import React from 'react';
import ReactDOM from 'react-dom';
//  import App from './App'
// npm install redux-thunk
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
function rootReducer(state=0,action) {
     const {type} =action;
     if(type==='ADD'){
         return state+1;
     }else if(type==='SUB'){
         return state-1;
     }else{
         return state
     }
}
  const store = createStore(rootReducer,applyMiddleware(thunk))
  const Counter=(props)=>{
      return(
          <div>
            <h1>{props.value}</h1>
              <button onClick={props.Add}>增加</button>
              <button onClick={props.asyncAdd}>异步增加</button>
              <button>递减</button>
          </div>
      )
  }

 render()
 store.subscribe(()=>{
     render()
 })

 function Add(){
     return {
         type: 'ADD'
     }
 }
function asyncAdd(){
    return function(dispatch,getState){
        const state=getState()
        if(state>=5){
            return
        }
        setTimeout(function(){
            dispatch(Add())
        },1000)
    }

}

 function render(){
    ReactDOM.render(<Counter value={store.getState()} Add={()=>store.dispatch(Add())} asyncAdd={()=>store.dispatch(asyncAdd())}/>, document.getElementById('root'))
 }

   


