import {ADD_ITEM,CHANGE_INPUT_VALUE,DELETE_ITEM,INIT_ITEM} from './actionType'
// import axios from 'axios'
export const getInputChangeAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction=()=>({
    type:ADD_ITEM
})
export const getDeleteItemAction=(index)=>({
    type:DELETE_ITEM,
    index
})
export const getInitItemAction=(data)=>({
    type:INIT_ITEM,
    data
})
// export const getItemList=()=>{
//     return (dispatch)=>{
//         axios.get(' http://localhost:8081/api/getUserList').then((res)=>{
//             const data=res.data;
//             console.log(data)
//            const action=getInitItemAction(data)
//            dispatch(action)
//         })
//     }
// }
