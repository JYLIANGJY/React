import React,{Component}from 'react'
class App extends Component{
    state={
        num:10
    }
    handleChange=e=>{
        this.setState({num:e.target.value})
    }
    render(){
        return (
            <div>
                {this.state.num}
                <textarea value={this.state.num} onChange={this.handleChange}/>
            </div>
        )
    }
}
export default App