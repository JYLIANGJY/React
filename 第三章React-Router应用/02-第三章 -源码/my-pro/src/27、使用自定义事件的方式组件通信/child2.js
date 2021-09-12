import React,{Component} from 'react'
import emitter from './events'
class Child2 extends Component{
    render(){
        return (
            <div>
                <button onClick={()=>emitter.emit('changeCount')}>点击</button>
            </div>
        )
    }
}
export default Child2