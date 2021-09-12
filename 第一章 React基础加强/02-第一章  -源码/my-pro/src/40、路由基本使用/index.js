import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
class Show extends Component{
    render(){
        return (
            <div>Hello world</div>
        )
    }
}
class App extends Component{
    render(){
        return(    
            <Router>
                <div>
                    路由基本应用 
                    <Link to='/show'>展示信息</Link> 
                    <Route path='/show' component={Show}></Route>           
                </div>
            </Router>     
       )
       
    }
}
export default App