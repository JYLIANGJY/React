import React from 'react'
import Child from './child'
class App extends React.Component{ 
    state={
        msg:''
    }
    getChildMsg=(data)=>{
        this.setState({msg:data})
    }
    render(){
        return (
            <div>
                父组件:{this.state.msg}
                <Child getMsg={this.getChildMsg} />
            </div>
        )
    }
}
export default App