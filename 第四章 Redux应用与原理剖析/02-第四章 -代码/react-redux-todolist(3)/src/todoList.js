import React, { Component } from 'react'
import {connect} from 'react-redux'
class TodoList extends Component{
    render(){
        return (
            <div>
               <div>
                   <input type="text" value={this.props.inputValue} onChange={this.props.handleChange}></input>
                   <button onClick={this.props.handleClick}>提交</button>
               </div>
               <ul>
                  {
                      this.props.list.map((item)=>{
                      return <li key={item.id}>{item.userName}</li>
                      })
                  }
               </ul>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handleChange(e){
            const action={
                type:'change_input_value',
                value:e.target.value
            }
            dispatch(action)
        },
        handleClick(){
            const action={
                type:'addItem'
            }
            dispatch(action)
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)