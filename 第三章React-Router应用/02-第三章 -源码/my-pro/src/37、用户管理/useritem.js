import React,{Component} from 'react';
class UserItem extends Component{
    render(){
        let user=this.props.user
        return (
            <li className='list-group-item'>
                <div className='row'>
                    <div className='col-md-1'>
                        <input type='checkbox' checked={user.completed} onChange={()=>this.props.handleChange(user.id)}/>
                    </div>
                    <div className='col-md-8' style={{textDecoration: user.completed?'line-through':''}}>
                       {
                           user.userInfo
                       }
                    </div>
                    <div className='col-md-3'>
                        <button className='btn btn-danger' onClick={()=>this.props.handleRemove(user.id)}>删除</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default UserItem