import React,{Component} from 'react'
class Child1 extends Component{
    render(){
        return (<div>
    <h1>计数器:{this.props.count}</h1>
        </div>)
    }
}
export default Child1