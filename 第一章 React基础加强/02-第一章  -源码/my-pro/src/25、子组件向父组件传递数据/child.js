import React,{Component} from 'react'
class Child extends Component{
    state={
        msgChild:'hello world'
    }
    handleClick=()=>{
        this.props.getMsg(this.state.msgChild)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>点击</button>
            </div>
        )
    }
}
export default Child