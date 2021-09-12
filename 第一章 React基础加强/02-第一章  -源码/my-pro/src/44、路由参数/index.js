import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import Home from './home'
class App extends Component{
    render(){
        return (
            <Router>
            <div>
                App组件内容
                <Link to="/home/1">首页</Link>&nbsp;&nbsp;
                <Link to="/home/sub">首页3</Link>
                <Switch>
                <Route path="/home/sub" component={Home}></Route>
                    <Route path="/home/:num" component={Home}></Route>
                   
                   
                </Switch>
            </div>
            </Router>
        )
    }
}
export default App