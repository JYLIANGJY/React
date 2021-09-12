import React,{Component} from 'react';
import {Table,Modal,message,Button,Form,Input} from 'antd'
import axios from '../../axios/index'
import Utils from '../../utils/utils.js'
class Product  extends Component{
    state = {
        dataSource:[],
        loading: false,
        showModal:false
        
      }
    params={page:1}
    componentDidMount(){
        this.request();
    } 
       // 通过axios获取远程服务器数据
       request=()=>{
        let that=this;
        this.setState({ loading: true });
        axios.ajaxAxios({
            url:'/getProductList',
            data:{
                params:{
                    // pageIndex:1
                    page:this.params.page
                }
            }
        }).then((res)=>{
            this.setState({
                dataSource:res.message,
                loading:false,
                // 保存返回的分页有关的数据。
                pagination:Utils.pagination(res,(current)=>{
                    that.params.page=current;
                    this.request();
                })

            })
        })
    }
  handleAdd=()=>{
      this.setState({showModal:true})
  }

    render(){
           // 定义表头
           const columns=[{
            title:'编号', // 表头文本
            dataIndex:'id', // 服务端返回的数据的key
          
        },{
            title:'商品名称',
            dataIndex:'title',
           
        },{
            title:'市场价格',
            dataIndex:'market_price'
         
        },{
            title:'库存',
            dataIndex:'stock_quantity'
          
        },{
            title:'添加商品日期',
            dataIndex:'add_time'
        },{
            title:'单击次数',
            dataIndex:'click'
        },{
            title:'操作',
            render:(item)=>{     
             
                return  <Button  onClick={()=>this.handleDelete(item)}>删除</Button>
            
            }
        }]
           //定义复选框状态
    const rowCheckSelection={
        type: 'checkbox',
        selectedRowKeys:this.state.selectedRowKeys,
        onChange:(selectedRowKeys,selectedRows)=>{       
            this.setState({
                selectedRowKeys,
                selectedRows
            })
        }
    } 
    const {getFieldDecorator}=this.props.form;
    return(  <div>
             <Button type='primary' onClick={this.handleAdd}>添加商品</Button>
             <Modal title='添加商品信息' visible={this.state.showModal}
             
              onCancel={
                  ()=>{
                      this.setState({showModal:false})
                  }
              }
              onOk={()=>{
                 let products=this.props.form.getFieldsValue();
                 this.props.form.validateFields((err,values)=>{
                     if(!err){
                         axios.ajaxPostAxios({
                             url:'/addProduct',
                             data:products
                         }).then((res)=>{
                             message.success('商品添加成功');
                             this.setState({showModal:false})

                         })
                     }
                 })
              }}
             >
                <Form style={{width:300}}>
                    <Form.Item>
                       {
                           getFieldDecorator('title',{
                               initialValue:'',
                               rules:[{
                                   required:true,
                                   message:'商品名称不能为空!'
                               }]
                           })(<Input placeholder="请输入商品名称"/>)
                       } 
                    </Form.Item>
                     <Form.Item>
                       {
                           getFieldDecorator('market_price',{
                               initialValue:'',
                               rules:[{
                                   required:true,
                                   message:'商品市场价格不能为空!'
                               }]
                           })(<Input placeholder="请输入商品市场价格"/>)
                       } 
                    </Form.Item>
                     <Form.Item>
                       {
                           getFieldDecorator('sell_price',{
                               initialValue:'',
                               rules:[{
                                   required:true,
                                   message:'商品售卖价不能为空!'
                               }]
                           })(<Input placeholder="请输入商品售卖价"/>)
                       } 
                    </Form.Item>
                     <Form.Item>
                       {
                           getFieldDecorator('stock_quantity',{
                               initialValue:'',
                               rules:[{
                                   required:true,
                                   message:'商品库存不能为空!'
                               }]
                           })(<Input placeholder="请输入商品库存"/>)
                       } 
                    </Form.Item>
                </Form>
             </Modal>
                          <Table
                    rowKey="id" 
                    loading={this.state.loading} 
                    columns={columns}
                    dataSource={this.state.dataSource} 
                    bordered 
                    // 添加复选框按钮
                    rowSelection={rowCheckSelection}
                    // 启用分页
                    pagination={this.state.pagination}
                   
              
              />
            </div>)
                 
    }
}
export default Form.create()(Product)