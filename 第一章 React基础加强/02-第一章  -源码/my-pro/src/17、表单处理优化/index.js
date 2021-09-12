import React,{Component}from 'react'
class App extends Component{
    state={
        num:10,
        content:'Hello',
        city:'shanghai',
        isChecked:true
    }
    handleChange=e=>{
       const target= e.target;
      const value= target.type==='checkbox'?target.checked:target.value;
      const name=target.name
      this.setState({
        [name]:value
      })
    }
    render(){
        return (
            <div>
                  {this.state.num}
                {this.state.content}
                {this.state.city}    
                <hr/>
                 <input type="text" name="num" value={this.state.num} onChange={this.handleChange}/>
                 <textarea name="content" value={this.state.content} onChange={this.handleChange}/>
                 <select name="city" value={this.state.city} onChange={this.handleChange}>
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="guangzhou">广州</option>
                 </select>
                 <input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.handleChange}/>
            </div>
        )
    }
}

export default App