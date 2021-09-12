import React,{Component}from 'react'
class CounterCom extends Component{
    state={count:0}
    // handleCountChange(){
    //     this.setState({count:this.state.count+1})
    // }
    handleCountChange=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <div>
                计算器:{this.state.count}
                {/* <button onClick={()=>this.handleCountChange()}>计算</button> */}
                <button onClick={this.handleCountChange}>计算</button>
            </div>
        )
    }
}
export default CounterCom