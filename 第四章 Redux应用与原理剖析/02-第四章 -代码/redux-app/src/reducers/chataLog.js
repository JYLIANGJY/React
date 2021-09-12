export default function chatLog(state=[],action){
    const{type,playload}=action;
    switch(type){
        case 'ADD_CHAT':
            return [...state,playload];
         default:
             return state;   
    }
}