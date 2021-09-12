import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class UserList extends Component{
    state={users:[]}
    componentDidMount(){
        let userInfo=localStorage.getItem('userInfo');
       let users=userInfo?JSON.parse(userInfo):[];
        this.setState({
                users
         })
    }
    render(){
        return(
            <div>
               <ul className='list-group'>
                   {
                       this.state.users.map(user =>{
                           return (
                            <li className='list-group-item' key={user.id}>
                                    <Link to={'/user/detail/'+user.id}>{user.userName}</Link> 
                            </li>
                           )
                       })
                   }

                   
               </ul>
            </div>
        );
    }
}
export default UserList;