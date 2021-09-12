import React,{Component} from 'react'
const {Provider,Consumer}=React.createContext()
class App extends Component{
    render(){
        return (
          <Provider value='zhangsan'>
                <div>
                    <Node></Node>
                </div>
          </Provider>
        )
    }
}
const Node =props=>{
    return (
        <div>
            <SubNode></SubNode>
        </div>
    )
}
const SubNode =props=>{
    return (
        <div>
           <Child></Child>
        </div>
    )
}
const Child =props=>{
    return (<div>
       <Consumer>
           {
                data=><span> 我是子节点:{data}</span>
           }
     
      </Consumer>
    
    </div>)
}
export default App