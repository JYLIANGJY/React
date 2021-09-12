import React,{Component} from 'react';
import store from './store'
// import {ADD_ITEM,CHANGE_INPUT_VALUE,DELETE_ITEM} from './store/actionType'
import {getInputChangeAction,getAddItemAction,getDeleteItemAction,getInitList} from './store/actionCreator'
import TodoListUI from './todoListUI'
// import axios from 'axios'
class TodoList extends Component{
    constructor(props){
        super(props);
        // console.log(store.getState());
        this.state=store.getState()
        store.subscribe(this.handleStoreChange)
    }
    handleChange=(e)=>{
        // const action={
        //     type:CHANGE_INPUT_VALUE,
        //     value:e.target.value
        // }  
       const action=getInputChangeAction(e.target.value)   
        store.dispatch(action)
    }
    handleStoreChange=(e)=>{
        //console.log('store change')
        this.setState(store.getState(),function(){
            console.log(this.state)
        })
    }
    handleClick=()=>{
        // const action={
        //     type:ADD_ITEM
        // }
        const action=getAddItemAction()
        store.dispatch(action)
    }
    handleDeleteItem=(index)=>{
        // const action={
        //     type:DELETE_ITEM,
        //     index
        // }
       const action=getDeleteItemAction(index)
        store.dispatch(action)
        //react-redux 展示组件与容器组件
        // npm install axios --save
    }
    componentDidMount(){
       const action=getInitList()
       store.dispatch(action)
        // axios.get(' http://localhost:8081/api/getUserList').then((res)=>{
        //     const data=res.data;
        //     console.log(data)
        //    const action=getInitItemAction(data)
        //    store.dispatch(action)
        // })
        // redux-saga
        // npm install --save redux-saga
        //使用redux-thunk中间件处理
    //    const action=getItemList()
    //    store.dispatch(action)
    }
    render(){
        return(
           <TodoListUI
           handleChange={this.handleChange}
           handleClick={this.handleClick}
           handleDeleteItem={this.handleDeleteItem}
           list={this.state.list}
           value={this.state.inputValue}
           >

           </TodoListUI>
        )
    }
}
export default TodoList