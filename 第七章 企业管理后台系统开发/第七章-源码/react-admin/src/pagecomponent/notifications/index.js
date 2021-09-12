import React,{Component} from 'react'
import {Button,notification} from 'antd'
class Notification extends Component {
    handleClick=()=>{
        notification.success({
            message:'订单确认',
            description:'用户已经下订单了，请及时处理',
            placement:'bottomRight'
        })
    }
    render(){
        return(
            <div>
                <Button onClick={this.handleClick}>通知提醒</Button>
            </div>
        )
    }
}
export default Notification