import React,{Component}from 'react'
class App extends Component{
    constructor(){
        super()
      this.txtRef=React.createRef()
    }
    handleClick=()=>{
        console.log(this.txtRef.current.value)
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.txtRef}/>
                <button onClick={this.handleClick}>单击</button>
            </div>
        )
    }

}
export default App