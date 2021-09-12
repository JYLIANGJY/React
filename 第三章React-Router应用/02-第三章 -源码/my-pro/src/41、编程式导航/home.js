import React,{Component} from 'react';
class Home extends Component{
    handleClick=()=>{
        this.props.history.go(-1);
    }
    render(){
        return (
            <div>
                <h3>网站首页</h3>
                <button onClick={this.handleClick}>返回</button>
            </div>
        )
    }
}
export default Home;
