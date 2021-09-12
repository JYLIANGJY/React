import React,{Component,Fragment}from 'react'
class Item extends Component{
    render(){
        return (
           <li onClick={this.handleDeleteItem}>
               {this.props.item.title}
           </li>
        )
    }
    handleDeleteItem=()=>{
            //调用父组件中的handleDeleteItem方法，完成数据的删除。
            this.props.handleDeleteItem(this.props.index)
    }
}
export default Item
