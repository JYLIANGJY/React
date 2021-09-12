import React,{Component} from 'react'
import {Tabs} from 'antd'
const { TabPane } = Tabs;
class Tab extends Component{
    callback=(key)=>{
        console.log('你单击的是第'+key+"个页签");
    }
    render(){
        return (
            <div>
                 <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">
                            用户列表信息
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            商品列表信息
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            订单列表信息
                        </TabPane>
              </Tabs>
            </div>
        )
    }
}
export default Tab