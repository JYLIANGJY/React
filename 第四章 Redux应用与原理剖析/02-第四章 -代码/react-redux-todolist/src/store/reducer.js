import {ADD_ITEM,CHANGE_INPUT_VALUE,DELETE_ITEM,INIT_ITEM} from './actionType'
const defaultState={
    inputValue:'',
    list:[{id:1,userName:'张三'},{id:2,userName:'李四'}]
}
export default(state=defaultState,action) =>{
    if(action.type===CHANGE_INPUT_VALUE){
        // 对state进行一次深拷贝
        const newState=JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value
      
        return newState
        
    }
    if(action.type===ADD_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        const item={id:Date.now(),userName:newState.inputValue}
        newState.list.push(item)
        newState.inputValue='';
        return newState
    }
    if(action.type===DELETE_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState
    }
    if(action.type===INIT_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list=action.data.message
        return newState
    }
   
    return state
}