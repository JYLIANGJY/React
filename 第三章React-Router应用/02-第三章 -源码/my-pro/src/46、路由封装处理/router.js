import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './home'
import About from './about'
import Content from './content'
import App from './app'
class IRouter extends Component{
    render(){
        return (
           <Router>
               <App>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/about' exact component={About}></Route>
                    <Route path='/content' exact component={Content}></Route>
               </App>
           </Router>
        )
    }
}
export default IRouter