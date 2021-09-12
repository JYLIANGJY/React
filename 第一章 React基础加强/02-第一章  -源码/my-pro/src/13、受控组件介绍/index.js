import React,{Component}from 'react'
class App extends Component{
    state = {
        num:10
    }
    handleChange=e=>{
        this.setState({num:e.target.value})
    }
    render(){
        return (
            <div>
                {this.state.num}
                <input type="text" value={this.state.num} onChange={this.handleChange}/>
            </div>
        )
    }
}
export default App