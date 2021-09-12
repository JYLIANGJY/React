import React,{Component} from 'react'
import { Button, Modal } from 'antd'
class Modals extends Component{
    state={
        showModal:false
    }
    handlClick=()=>{
        this.setState({showModal:true})
    }
    handlConfirm=()=>{
        Modal.confirm({
            title:'删除提示',
            content:'你确定要删除该记录吗？',
            onOk(){
                alert('删除成功')
            },
            onCancel(){
                alert('取消删除')
            }
        })
    }
    render(){
        return(
            <div>
                <Button type="primary" onClick={this.handlClick}>打开窗口</Button>
                <Button type="primary" onClick={this.handlConfirm}>确认窗口</Button>
                <Modal title="React" visible={this.state.showModal}
                    onCancel={
                        ()=>{
                            this.setState({showModal:false})
                        }
                    }
                    onOk={()=>{
                        alert('你单击了确定按钮')
                        this.setState({showModal:false})
                    }}
                    okText='确定'
                    cancelText='取消'
                >
                    
                    <p>
                        Hello World
                    </p>
                </Modal>
            </div>
        )
    }
}
export default Modals