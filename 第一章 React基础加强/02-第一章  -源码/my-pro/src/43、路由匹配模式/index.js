import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Login from './login'
import Home from './home'
class App extends Component{
    render(){
        return (
            <Router>
                <div>
                    <h3>欢迎访问，请先登录</h3>
                    <Link to='/login'>登录页面</Link>
                    <Route path='/'  exact component={Home}></Route>
                    <Route path='/login' component={Login}></Route>
                   
                </div>
            </Router>
        )
    }
}
export default App