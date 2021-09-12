import React,{Component}from 'react'
class CounterCom extends Component{
    // constructor(){
    //     super()
    //     this.state={
    //         count:0
    //     }
    // }
    state={count:0}
    render(){
        return(
            <div>
                计算器:{this.state.count}
                {/* {this.state.count+=1} */}
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>计算</button>
            </div>
        )
    }
}
export default CounterCom