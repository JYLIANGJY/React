import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter,Route} from 'react-router-dom'
import Routes from '../Routes'
import {getClientStore} from '../store'
import {Provider} from 'react-redux'
const store=getClientStore()
// import Home from '../components/Home'
const App=()=>{
    return(
        <Provider store={store}>
            <BrowserRouter> 
            <div>
                {
                    Routes.map(route=>(
                        <Route {...route}></Route>
                    ))
                }
                </div>        
              {/* {Routes} */}
            </BrowserRouter>
        </Provider>
    )
}
ReactDom.hydrate(<App/>,document.getElementById('root'))