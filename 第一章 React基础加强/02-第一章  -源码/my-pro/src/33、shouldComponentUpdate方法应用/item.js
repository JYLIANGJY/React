import React,{Component}from 'react'
class Item extends Component{
    render(){
        console.log('我是子组件')
        return (
           <li onClick={this.handleDeleteItem}>
               {this.props.item.title}
           </li>
        )
    }
    //nextProps：当组件被更新的时候，props更新后的内容
    // nextState：当组件被更新的时候 ,state更新后的内容
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.item.title!==this.props.item.title){
            return true
        }else{
            return false
        }
    }
    handleDeleteItem=()=>{
            //调用父组件中的handleDeleteItem方法，完成数据的删除。
            this.props.handleDeleteItem(this.props.index)
    }
}
export default Item
