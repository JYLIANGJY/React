export default function statusMessage(state='',action){
    const {type,playload}=action;
    switch(type){
        case 'CHANGE_STATUS':
            return playload
         default:
             return state   
    }
}