import React,{Component} from 'react';
class UserDetail extends Component{
    state={user:{}}
    componentDidMount(){
        let userId=this.props.match.params.id;
        let userInfo=localStorage.getItem('userInfo');
        let users=userInfo?JSON.parse(userInfo):[];
       let user=users.find(u=>u.id==userId);
       this.setState({user})
    }
    render(){
        return (
            <div>
                用户编号:{this.state.user.id}
                用户名:{this.state.user.userName}
            </div>
        )
    }
}
export default UserDetail