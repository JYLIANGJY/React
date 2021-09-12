import React from 'react';
import {Route,Redirect} from 'react-router-dom';
export default function({component:Component,...rest}){
    return <Route {...rest} render={(props)=>{
        return(
            localStorage.getItem('userlogin')?<Component/>:<Redirect to={{
                pathname:'/login',
                state:{from:props.location.pathname}
            }}></Redirect>
        )
    }}>

    </Route>
}