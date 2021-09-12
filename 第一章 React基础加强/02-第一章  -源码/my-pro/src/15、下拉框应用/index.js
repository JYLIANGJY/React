import React,{Component}from 'react'
class App extends Component{
    state={city:'guangzhou'}
    handleChange=e=>{
        this.setState({city:e.target.value})
    }
    render(){
        return (
            <div>  
                {this.state.city}            
                <select value={this.state.city} onChange={this.handleChange}>
                    <option value='beijing'>北京</option>
                    <option value='shanghai'>上海</option>
                    <option value='guangzhou'>广州</option>
                </select>
            </div>
        )
    }
}
export default App