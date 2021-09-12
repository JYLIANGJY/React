import React,{Component}from 'react'
import Message from './message'
class App extends Component{
    state = {
        count:0
    }
    handleClick=()=>{     
         this.setState({
             count:this.state.count+1
         })
    
        }
    render(){
            return (
                <div>
                    {
                        this.state.count>6?<p>组件消失</p>:<Message count={this.state.count}/>
                    }
                   
                    <button id='btn' onClick={this.handleClick}>计算</button>
                </div>
            )
        }     
}
export default App
