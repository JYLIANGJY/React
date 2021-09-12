import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoHeader from './header'
import UserItem from './useritem'
import UserFooter from './footer'
import * as SearchTypes from './searchType'
class App extends Component{
    state={
        userList:[{id:1,userInfo:'张三的信息',completed:false},{id:2,userInfo:'李四的信息',completed:true}],
        filter:SearchTypes.ALL
    }
    handleSearchType=(filter)=>{
        this.setState({filter})
    }
    handleRemoveCompleted=()=>{
        let userList=this.state.userList;
        userList=userList.filter(user=>!user.completed)
        this.setState({userList})
    }
    addUser=(userInfo)=>{
        let id=this.state.userList[this.state.userList.length-1].id
        let newItem={id:id+1,userInfo:userInfo,completed:false}
        this.setState({userList:[...this.state.userList,newItem]})
    }
    handleChange=(id)=>{
        let userList=this.state.userList;
       userList= userList.map(user=>{
            if(user.id===id){
               user.completed=!user.completed     
            }
            return user;
        })
        this.setState({userList})
    }
    handleRemove=(id)=>{
        console.log('aaa')
        let userList=this.state.userList;
       let index= userList.findIndex(user => user.id===id);
       userList.splice(index,1)
       this.setState({userList})
    }
    handleCheckAll=(event)=>{
        let userList=this.state.userList;
        let checked=event.target.checked;
       userList= userList.map(user=>{
            user.completed=checked;
            return user
        })
        this.setState({userList})
    }
    render(){    
        let userList=this.state.userList;
       let activeCount=userList.reduce((count,user)=>count+(user.completed?0:1),0)

       let showUserList=userList.filter((user)=>{
           switch(this.state.filter){
               case SearchTypes.ACTIVE:
                   return !user.completed
                case SearchTypes.COMPLETED: 
                   return user.completed
                default:
                    return true     
           }
       })
        let UserBody=()=>{
            return (
                <ul className="list-group">
                 <li className="list-group-item">
                    <input type="checkbox" checked={activeCount===0} onChange={this.handleCheckAll}/>{activeCount===0?'全部取消':'全选'}
                 </li>
                    {
                       showUserList.map((user, index)=><UserItem key={user.id} user={user} handleChange={this.handleChange} handleRemove={this.handleRemove}></UserItem>)
                    }
                </ul>
            )
        }
        return (
            <div className="container" style={{marginTop:30}}>
                 <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader addUser={this.addUser}/>
                            </div>
                            <div className="panel-body">
                                {/* 中间区域 */}
                                <UserBody/>
                            </div>
                            <div className="panel-footer">
                                {/* 底部区域 */}
                                <UserFooter activeCount={activeCount} handleSearchType={this.handleSearchType} handleRemoveCompleted={this.handleRemoveCompleted}/>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}
export default App;