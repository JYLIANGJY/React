export default  function userName(state='',action){
    const{type,playload}=action
    switch(type){
        case 'CHANGE_USERNAME':
            return playload
        default:
            return state
    }
}