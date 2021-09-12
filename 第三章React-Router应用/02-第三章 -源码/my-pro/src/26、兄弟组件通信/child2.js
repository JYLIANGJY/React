import React,{Component} from 'react'
class Child2 extends Component{
    render(){
        return (
            <div>
              <button onClick={()=>this.props.addNum()} >计算</button>
            </div>
        )
    }
}
export default Child2