import React,{Component}from 'react'
class CounterCom extends Component{
    constructor(){
        super()
        this.state={count:0}
        this.handleCountChange=this.handleCountChange.bind(this);
    }
   
    handleCountChange(){
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <div>
                计算器:{this.state.count}
                <button onClick={this.handleCountChange}>计算</button>
            </div>
        )
    }
}
export default CounterCom