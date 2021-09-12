import React,{Component} from 'react'
import Child1 from './child1'
import Child2 from './child2'
class App extends Component{
    state={
        count:0
    }
    addNum=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return (
            <div>
                <Child1  count={this.state.count}/>
                <Child2 addNum={this.addNum}/>
            </div>
        )
    }
}
export default App