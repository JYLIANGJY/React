import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom'
class Content extends Component{
    render(){
        return (
            <div>
    <h5>{this.props.match.params.homeId?this.props.match.params.homeId:'请单击主题列表选择'}</h5>
            </div>
        )
    }
}
class Home extends Component{
    constructor(props){
        super(props);
    //    console.log(props.match.url)
        this.match=props.match
    }
    render(){
        return (
            <div>
                <h3>主题列表</h3>
                <ul>
                    <li>
                      <Link to={`${this.match.url}/vue`}>VUE内容</Link>                       
                   </li>
                    <li><Link to={`${this.match.url}/react`}>React内容</Link> </li>
                    <li><Link to={`${this.match.url}/js`}>Js内容</Link></li>
                   
                   <Route path={`${this.match.url}`} exact component={Content}></Route>
                    <Route path={`${this.match.url}/:homeId`} component={Content}></Route> 
                </ul>
            </div>
        )
    }
}
export default Home;