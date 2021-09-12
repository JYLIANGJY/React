import {createStore} from 'redux'
function reducer(state=0,action){
    switch(action.type){
        case 'ADD':
           return state + 1
        case 'SUB':
            return state - 1
        default:
            return state        
    }
}
const store=createStore(reducer);
export default store
