import React,{Component} from 'react';
class UserAdd extends Component{
    state={
        userName:''
    }
    handleChange=(e)=>{
       this.setState({userName:e.target.value})
    }
    handleSubmit=(e)=>{
       let userInfo=localStorage.getItem('userInfo');
       let users=userInfo?JSON.parse(userInfo):[];
       users.push({id:Date.now(),userName:this.state.userName})
       localStorage.setItem('userInfo',JSON.stringify(users));
       this.props.history.push('/user/list');
        e.preventDefault()
    }
    render(){
        return(
            <div>
             <form onSubmit={this.handleSubmit}>
                 <div className="form-group">
                     <input type="text" className='form-control' onChange={this.handleChange} >

                     </input>
                 </div>
                 <div className="form-group">
                    <input type="submit" className='btn btn-primary'></input>
                 </div>
             </form>
            </div>
        );
    }
}
export default UserAdd;