import React from 'react'
import {Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
export default[
    {
        path:"/",
        component:Home,
        exact:true,
        loadData:Home.loadData,
        key:'home'
    },{
        path:"/login",
        component:Login,
        key:'login'
    }
]

// export default(
//     <div>
//         <Route path='/' exact  component={Home}></Route>
//         <Route path='/login' component={Login}></Route>
//     </div>
// )