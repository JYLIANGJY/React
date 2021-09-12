import React,{Component} from 'react';
class Login extends Component{
    handleClick=()=>{
        this.props.history.push('/home')
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>登录</button>
            </div>
        )
    }
}
export default Login