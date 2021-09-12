import React,{Component} from 'react';
class Message extends Component{ 
    render(){
        return (
            <div>
                <h1>计算结果:{this.props.count}</h1>
            </div>
        )
    }
    componentDidMount(){
        this.timerId=setInterval(function(){
            console.log('hello')
        },1000)
    }
    componentWillUnmount(){
        console.log('生命周期----componentWillUnmount')
        clearInterval(this.timerId)
    }
}
export default Message