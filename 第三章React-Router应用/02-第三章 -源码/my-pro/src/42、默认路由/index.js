import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './home'
class App extends Component{
    render(){
        return (
            <Router>
                <div>
                    默认路由使用
                    <Route path="/" component={Home}></Route>
                </div>
            </Router>
        )
    }
}
export default App