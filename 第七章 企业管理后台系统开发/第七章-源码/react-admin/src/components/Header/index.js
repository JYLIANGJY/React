import React,{Component} from 'react'
import {Row,Col} from 'antd'
import './index.css'
class Header extends Component{
     constructor(props){
         super(props)
         this.state={
             userName:'张三'
         }
     }
    render(){
        return(
            <div>
                <Row className="header-top">
                    <Col span={24}>
        <span>欢迎:{this.state.userName}登录系统</span>
        <a href='/logout'>退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="breadcrumb-date">
                        <span>2119年11月2日</span>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Header