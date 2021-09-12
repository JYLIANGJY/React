import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Home from './home'
import User from './user'
import About from './about'
import ProtectedRoute from './ProtectedRoute'
import Login from './login'
import MenuLink from './MenuLink'
class App extends Component{
    render(){
        return (
            <Router>
                <div>
                   <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <div className="navbar-brand">
                                   CMS管理系统
                                </div>
                                <ul className="nav navbar-nav">
                                    {/* <li><Link to='/home'>首页</Link></li>
                                    <li><Link to='/user'>用户管理</Link></li>
                                    <li><Link to='/about'>用户设置</Link></li> */}
                                  <MenuLink label='首页' to='/home'></MenuLink>
                                  <MenuLink label='用户管理' to='/user'></MenuLink>
                                  <MenuLink label='用户设置' to='/about'></MenuLink>
                                </ul>
                            </div>
                        </div>
                   </nav>
                   <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <Route path='/' exact render={()=>{return(<div>网站首页</div>)}}></Route>
                                <Route path='/home' component={Home}></Route>
                                <Route path='/user' component={User}></Route>
                                <Route path='/login' component={Login}></Route>
                                {/* <Route path='/about' component={About}></Route> */}
                                <ProtectedRoute path='/about' component={About}></ProtectedRoute>
                            </div>
                        </div>
                   </div>
                </div>
            </Router>
        )
    }
}
export default App