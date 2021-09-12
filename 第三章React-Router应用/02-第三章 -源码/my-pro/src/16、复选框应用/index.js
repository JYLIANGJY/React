import React,{Component}from 'react'
class App extends Component{
    state={
        isChecked:true
    }
    handleChange=e=>{
        this.setState({isChecked:e.target.checked})
    }
    render(){
        return(
            <div>
                复选框<input type="checkbox" checked={this.state.isChecked} onChange={this.handleChange}/>
            </div>
        )
    }
}
export default App