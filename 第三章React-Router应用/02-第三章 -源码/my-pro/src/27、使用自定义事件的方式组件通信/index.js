import React,{Component} from 'react'
import Child1 from './child1'
import Child2 from './child2'
class App extends Component{
    render(){
        return (
            <div>
                <Child1/>
                <Child2/>
            </div>
        )
    }
}
export default App