import React,{useReducer} from 'react';
const initState={count:0}
function reducer(state,action){
    switch(action.type){
        case 'Add':
            return {count:state.count+1}
         case 'Sub':
             return {count:state.count-1};
        default: 
        throw new Error()  
    }
}
function HookTest(){
   const [state,dispatch]= useReducer(reducer,initState)
   return(
       <div>
            count: {state.count}
          <button onClick={()=>dispatch({type:'Add'})}>加法</button>
          <button onClick={()=>dispatch({type:'Sub'})}>减法</button>
          
       </div>
   )
}
export default HookTest