import React,{Component} from 'react'
import emitter from './events'
class Child1 extends Component{
     constructor(){
         super()
         this.state={
             count:0
         }
        emitter.addListener('changeCount',()=>{
            this.setState({count:this.state.count+1})
        })
     }
    render(){
        return (
            <div>
    <h1>计数器:{this.state.count}</h1>
            </div>
        )
    }
}
export default Child1