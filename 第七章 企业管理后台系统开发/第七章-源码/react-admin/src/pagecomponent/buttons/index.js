import React,{Component} from 'react'
import { Button } from 'antd'
class Buttons extends Component{
    state={
        isLoading:true
    }
    handleClick=()=>{
        this.setState({
            isLoading:false
        })
    }
    render(){
        return(
            <div>
            登录按钮组件
            <Button type="primary" icon="edit">按钮</Button>
            <Button >按钮</Button>
            <Button type="dashed">按钮</Button>
            <Button type="danger">按钮</Button>
            <Button type="primary" icon="delete">按钮</Button>
            <Button type="primary" loading={this.state.isLoading}>按钮</Button>
            <Button onClick={this.handleClick} >关闭</Button>
            </div>
        )
    }
}
export default Buttons