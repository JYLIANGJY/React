import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pagecomponent/login'
import Buttons from './pagecomponent/buttons'
import Modals from './pagecomponent/modals'
import Notification from './pagecomponent/notifications'
import Tab from './pagecomponent/tabs'
import Register from './pagecomponent/register'
import UserTable from './pagecomponent/table'
import Product from './pagecomponent/product'
class IRouter extends Component{
    render(){
        return(
         <BrowserRouter>
            <App>
                {/* <Route path='/login' component={Login}></Route> */}
                {/* <Route path='/admin' component={Admin}></Route> */}
                  <Route path='/admin' render={()=>
                    <Admin>
                      <Route path='/admin/componet/buttons' component={Buttons}></Route>
                      <Route path='/admin/componet/modals' component={Modals}></Route>
                      <Route path='/admin/componet/notification' component={Notification}></Route>
                      <Route path='/admin/componet/tabs' component={Tab}></Route>
                      <Route path='/admin/form/login' component={Login}></Route>
                       <Route path='/admin/form/reg' component={Register}></Route>
                         <Route path='/admin/table/basic' component={UserTable}></Route>
                          <Route path='/admin/product' component={Product}></Route>
                    </Admin>
                  
                  }></Route>
            </App>
         </BrowserRouter>
        )
    }
}
export default IRouter
// npm add react-router-dom