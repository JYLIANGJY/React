import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';

class Login extends Component{
    state={
        isLogin:true
    }
    handleClick=()=>{
        this.setState({isLogin:false})
    }
    render(){
        return (
            <div>
                {
                    this.state.isLogin?<button onClick={this.handleClick}>登录</button>:<Redirect to={{
                        pathname:'/home',
                        search:'p1=1&p2=2'
                    }}></Redirect>
                }
                
            </div>
        )
    }
}
class Home extends Component{
    render(){
        return (
            <div>
                Home组件
            </div>
        )
    }
}
class App extends Component{
    //重定向
    render(){
        return (
            <Router>
                <div>
                    <h1>xxx网站</h1>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/home" component={Home}></Route>
                </div>
            </Router>
        )
    }
}
export default App;
