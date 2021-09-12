import React,{Component}from 'react'
class CounterCom extends Component{
    state={count:0}
    handleCountChange=()=>{
        // this.setState({count:this.state.count+1})
        // console.log('count=',this.state.count);
        // this.setState({count:this.state.count+1})
        // console.log('count=',this.state.count);
        setTimeout(()=>{
            this.setState({count:this.state.count+1})
            console.log('count=',this.state.count)
            this.setState({count:this.state.count+1})
            console.log('count=',this.state.count)
        },1000)
    }
    render(){
        console.log('render');
        return(
            <div>
                计算器:{this.state.count}
               
                <button onClick={this.handleCountChange}>计算</button>
            </div>
        )
    }
}
export default CounterCom