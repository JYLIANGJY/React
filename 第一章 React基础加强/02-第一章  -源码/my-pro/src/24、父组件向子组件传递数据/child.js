import React,{Component} from 'react'
class Child extends Component{
  render(){
      return(
          <div>
  <p>我是子组件:{this.props.userName}</p>
          </div>
      )
  }
}
export default Child