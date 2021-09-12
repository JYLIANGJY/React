import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './home'
class App extends Component{
    render(){
        return (
            <Router>
                <div>
                    <Link to='/home'>首页</Link>
                
                    <Route path='/home' component={Home}></Route>
                    
                </div>
            </Router>
        )
    }
}
export default App