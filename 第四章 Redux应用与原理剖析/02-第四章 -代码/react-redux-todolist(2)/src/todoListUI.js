import React,{Component,Fragment}from 'react'
class TodoListUI  extends Component{
    render(){
        return(
            <Fragment>
                <div><input type="text" onChange={this.props.handleChange} value={this.props.value} ></input><button onClick={this.props.handleClick}>添加</button></div>
                <ul>
                   {
                       this.props.list.map((user,index)=>{
                           return (
                           <li key={user.id} onClick={()=>this.props.handleDeleteItem(index)}>{user.userName}</li>
                           )
                       })
                   }
                </ul>
            </Fragment>
        )
    }
}
export default TodoListUI
