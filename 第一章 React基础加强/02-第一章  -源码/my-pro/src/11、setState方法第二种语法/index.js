import React,{Component}from 'react'
class CounterCom extends Component{
    state = {
        count:10
    }
   handleCountChange=()=>{   
        this.setState((state,props)=>{
            return{
                count:state.count+1
            }
        })
        console.log('count=',this.state.count);
        this.setState((state,props)=>{
            return{
                count:state.count+1
            }
        })
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