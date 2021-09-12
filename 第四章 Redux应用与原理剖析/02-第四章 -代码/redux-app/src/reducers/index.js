import chatLog from './chataLog'
import statusMessage from './statusMessage'
import userName from './userName'
import {combineReducers} from 'redux'
export default combineReducers({
    chatLog,
    statusMessage,
    userName
})

// export default function(state={},action={}){
//     return {
//         chatLog:chatLog(state.chatLog,action),
//         statusMessage:statusMessage(state.statusMessage,action),
//         userName:userName(state.userName,action)
//     }
// }