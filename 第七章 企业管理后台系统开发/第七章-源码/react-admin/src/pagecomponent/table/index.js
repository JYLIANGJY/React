import React,{Component} from 'react';
import {Table,Modal,Button,message} from 'antd'
// import axios from 'axios'
import axios from '../../axios/index'
import Utils from '../../utils/utils.js'
class UserTable extends Component{
    state={
        dataSource2:[]
    }
    params={page:1}
    componentDidMount(){
        const dataSource=[
            {
                id:1,
                userName:'张三',
                sex:1,
                state:1,
                birthday:'2012-1-2',
                content:'是一个大帅哥'
            },
             {
                id:2,
                userName:'李四',
                sex:1,
                state:1,
                birthday:'2012-1-2',
                content:'是一个大帅哥'
            },
             {
                id:3,
                userName:'王五',
                sex:1,
                state:1,
                birthday:'2012-1-2',
                content:'是一个大帅哥'
            }
    
        ]
        // npm install axios --save
        this.setState({dataSource})
        this.request()
    }
    request=()=>{
        let that=this;
       axios.ajaxAxios({
           url:'/getUserList',
           data:{
               params:{
                //    pageIndex:1
                page:this.params.page
               }
           }
       }).then((res)=>{
           this.setState({
            dataSource2:res.message,
            pagination:Utils.pagination(res,(current)=>{
                that.params.page=current;
                that.request()
            })
           })
       })

        // let baseUrl='http://localhost:8081';
        // axios.get(baseUrl+'/api/getUserList').then((res)=>{
        //     if(res.status===200){
        //         this.setState({
        //             dataSource2:res.data.message
        //         })
        //     }
        // })
    }
onRowClick=(record,index)=>{
    let selectKey=[index+1];
    Modal.info({
        title:'展示用户信息',
        content:`用户名是:${record.userName}`
    })
    this.setState({
        selectedRowKeys:selectKey,
        selectedItem:record
    })
}
handleClick=()=>{
    let rows=this.state.selectedRows;
    let ids=[];
    rows.map((item)=>{
     return ids.push(item.id)
    })
    Modal.confirm({
        title:'删除提示',
        content:`确定要删除选中的数据?${ids.join(',')}`,
        onOk:()=>{
            message.success('删除成功')
        }
    })
}

handleDeleteItem=(item)=>{
    let id=item.id;
    Modal.confirm({
        title:'确认删除',
        content:`你确定要删除${id}此记录?`,
        onOk:()=>{
            message.success('删除成功')
        }
    })
}
      render(){
        const rowSelection={
        //    type:'radio',
        type:'checkbox',
            selectedRowKeys:this.state.selectedRowKeys,
            onChange:(selectedRowKeys,selectedRows)=>{
                // console.log('selectedRowKeys=',selectedRowKeys)
                // console.log('selectedRows=',selectedRows)
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
     
        }
          const columns=[{
              title:'编号',
              dataIndex:'id'
          },{
              title:'用户名',
              dataIndex:'userName'
          },{
              title:'性别',
              dataIndex:'sex',
              render(sex){
                  return sex===1?'男':'女'
              }
          },{
              title:'状态',
              dataIndex:'state',
              render(state){
                  let config={
                      '1':'已经查看',
                      '2':'已经审批',
                      '3':'已经编辑'
                  }
                  return config[state]
              }
          },{
              title:'出生日期',
              dataIndex:'birthday'
          },{
              title:'个人简介',
              dataIndex:'content'
          },{
              title:'操作',
              render:(item)=>{
                  return <Button onClick={()=>this.handleDeleteItem(item)}>删除</Button>
              }
          }]
          return(
              <div>
              <Table columns={columns} dataSource={this.state.dataSource} rowKey="id" />
               <Button type="primary" onClick={this.handleClick}>删除</Button>
              <Table columns={columns} dataSource={this.state.dataSource2} rowKey="id"
                rowSelection={rowSelection}
                onRow={
                    (record,index)=>{
                        return{
                            onClick:()=>{
                                this.onRowClick(record,index)
                            }
                        }
                    }
                }
                pagination={this.state.pagination}
             />
              </div>
          )
      }       
   }

export default UserTable