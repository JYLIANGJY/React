import React,{Component} from 'react';
class Home extends Component{
    render(){
        return (
            <div>
                <h3>网站首页</h3>
            {
                this.props.match.params.num
            }
            </div>
        )
    }
}
export default Home;
