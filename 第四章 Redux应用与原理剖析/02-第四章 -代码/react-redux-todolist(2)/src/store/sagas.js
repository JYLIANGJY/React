import {takeEvery,put} from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionType'
import {getInitItemAction} from './actionCreator'
import axios from 'axios'
function*getInitList(){
 const res= yield axios.get('http://localhost:8081/api/getUserList')
 const action=getInitItemAction(res.data)
 yield put(action) //dispatch
    
}
function* mySaga(){
    //Generator
   yield takeEvery(GET_INIT_LIST,getInitList)
}
export default mySaga