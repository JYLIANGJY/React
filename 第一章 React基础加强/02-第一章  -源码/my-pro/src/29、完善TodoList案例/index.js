import React,{Component,Fragment}from 'react'
import Item from './item'
class TodoList extends Component{
    state={
        inputValue:'hello',
        newList:[{id:1,title:'国内新闻'},{id:2,title:'国际新闻'}]
    }
    handleChange=(e)=>{
        this.setState({inputValue:e.target.value})
    }
    handlAddNew=()=>{
       let id=Number.parseInt(this.state.newList[this.state.newList.length-1].id)
       let newItem={id:id+1,title:this.state.inputValue}
    //    this.setState({
    //        newList:[...this.state.newList,newItem],
    //        inputValue:''
    //    })
    this.setState((state)=>({
        newList:[...state.newList,newItem],
        inputValue:''
    }))
 
    }
    handleDeleteItem=(index)=> {
        const list=[...this.state.newList]
        list.splice(index,1)
        // this.state.newList.splice(index,1)错误的
        this.setState({
            newList:list
        })
    }
    getItem=()=>{
       return(this.state.newList.map((item,index)=>{
            return <Item key={item.id} item={item} handleDeleteItem={this.handleDeleteItem} index={index}></Item>
        }))
       
    }
    render(){
        return (
            <Fragment>
                <div><input type="text" value={this.state.inputValue} onChange={this.handleChange}/><button onClick={this.handlAddNew}>添加</button></div>
                <ul>
                  {
                     this.getItem()
                  }
                </ul>
            </Fragment>
        )
    }
}
export default TodoList