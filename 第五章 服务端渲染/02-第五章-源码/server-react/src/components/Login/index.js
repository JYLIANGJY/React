import React from 'react';
import Common from '../Common'
import styles from './style.css'
// const Login=()=>{
//     return (<div>
//         <Common></Common>
//           <div>用户登录</div>
//     </div>)
// }
class Login extends React.Component{
    constructor(props){
        super(props)
        if(styles._getCss){
           this.props.staticContext.css=styles._getCss()
        }
    }
    render(){
        return(
            <div>
                 <Common></Common>
                   <div className={styles.login}>用户登录</div>
            </div>    
        )
    }
}

export default Login;