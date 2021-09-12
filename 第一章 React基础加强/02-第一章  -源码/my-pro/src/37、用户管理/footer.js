import React,{Component} from 'react';
import * as SearchTypes from './searchType'
class UserFooter extends Component{  
    render(){
        return (
            <div className="row" style={{marginTop:10}}> 
                <div className="col-md-5 text-center">
        你有<span className="font-weight-bolder">{this.props.activeCount}</span>个用户信息需要处理
                </div>
                <div className="col-md-5 text-center">
                    <button className="btn-small btn-primary" onClick={()=>this.props.handleSearchType(SearchTypes.ALL)}>全部</button>
                    <button className="btn-small btn-success" style={{marginLeft:10}} onClick={()=>this.props.handleSearchType(SearchTypes.ACTIVE)}>未完成</button>
                    <button className="btn-small btn-primary" style={{marginLeft:10}} onClick={()=>this.props.handleSearchType(SearchTypes.COMPLETED)}>已完成</button>
                </div>
                <div className="col-md-2 text-center">
                <button className="btn-small btn-primary" onClick={()=>this.props.handleRemoveCompleted()}>删除</button>
                </div>
            </div>
        )
    }
}
export default UserFooter