const defaultState={
    inputValue:'123',
    list:[]
}
export default(state=defaultState,action)=>{
    if(action.type==='change_input_value'){        
        const newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value;
        return newState
    }
    if(action.type==='addItem'){
         const newState=JSON.parse(JSON.stringify(state))
         const item={id:Date.now(),userName:newState.inputValue}
         newState.list.push(item)
         newState.inputValue=''
         return newState
    }
    return state
}