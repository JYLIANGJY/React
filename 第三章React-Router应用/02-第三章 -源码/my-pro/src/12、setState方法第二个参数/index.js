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
        },()=>{
            console.log('状态更新完成',this.state.count)
            console.log(document.getElementById('div1'))
        })
       
    }
    render(){     
        return(
            <div id='div1'>
            计算器:{this.state.count}
            <button onClick={this.handleCountChange}>计算</button>
          </div>
        )       
    }
}
export default CounterCom