import React from 'react'
import Child from './child'
class App extends React.Component{ 
    state={
        name:'laozhang'
    }
    render(){
        return(
            <div>
                <Child userName={this.state.name}/>
            </div>
        )
    }
 }
 export default App