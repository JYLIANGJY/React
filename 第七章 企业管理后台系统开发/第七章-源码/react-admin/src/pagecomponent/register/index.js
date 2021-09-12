import React,{Component} from 'react'
import {Form,Button,Input,InputNumber,Radio,Select,DatePicker,Icon} from 'antd'
import moment from 'moment'
class Register extends Component{
    render(){
        const {getFieldDecorator}=this.props.form;
        const {Option}=Select;
        const formItemLayout={
            labelCol:{
                // 屏幕<576px
                xs:24,
                // 屏幕>=576px
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        const buttonItemLayout={
            wrapperCol:{
                xs:24,
                sm:{
                    span:12, // sm:12
                    offset:4
                }
            }
        }
        return(
            <div>
               <Form>
                   <Form.Item label="用户名" {...formItemLayout} >
                   {
                            getFieldDecorator('userName',{
                                  initialValue:'',
                                  rules:[{
                                      required:true,
                                      message:'用户名不能为空'
                                  },{
                                      min:3,
                                      max:20,
                                      message:'用户名长度不在指定范围内'
                                  },{
                                      pattern:/^\w/g,
                                      message:'用户名必须为英文字母或者是数字'
                                  }]
                            })(<Input prefix={<Icon type='user'></Icon>} placeholder="请输入用户名"></Input>)
                        }
                   </Form.Item>
                   <Form.Item label="用户密码"  {...formItemLayout}>
                    {
                        getFieldDecorator('userPwd',{
                           initialValue:'',
                           rules:[{
                               required:true,
                               message:'密码不能为空'
                           }]     
                        })(<Input prefix={<Icon type='lock'></Icon>} placeholder="请输入密码" type="password"></Input>)
                    }
                   
                </Form.Item>
                <Form.Item label='性别' {...formItemLayout}>
                   {
                       getFieldDecorator('sex',{
                           initialValue:'1'
                       })(
                           <Radio.Group>
                             <Radio value='1'>男</Radio>
                              <Radio value='2'>女</Radio>
                           </Radio.Group>
                       )
                   }
                </Form.Item>

                 <Form.Item label='年龄' {...formItemLayout}>
                 {
                    getFieldDecorator('age',{
                        initialValue:20
                    })(<InputNumber/>)
                 }
                 
                  </Form.Item>
                   
                   
                   <Form.Item  label='城市' {...formItemLayout}>
                         {
                        getFieldDecorator('city',{
                            initialValue:['2','3']
                        })(
                            <Select mode="multiple">
                                <Option value='1'>北京</Option>
                                 <Option value='2'>上海</Option>
                                  <Option value='3'>深圳</Option>
                            </Select>
                        )
                    }
                    </Form.Item>
                    <Form.Item label='出生日期' {...formItemLayout}>
                        {
                            getFieldDecorator('birthday',{
                                initialValue:moment('2111-12-1')
                            })(<DatePicker/>)
                        }
                    </Form.Item>
                     <Form.Item label='个人介绍' {...formItemLayout}>
                     {
                         getFieldDecorator('content',{
                             initialValue:'请输入个人介绍'
                         })(<Input.TextArea autoSize={

                             {
                                 minRows:4,
                                 maxRows:6
                             }
                         }/>)
                     }
                      </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                    {
                       getFieldDecorator('btnRegister')(
                           <Button type='primary'>
                           注册
                           </Button>
                       )
                    }
                    </Form.Item>
               </Form>
            </div>
        )
    }
}
export default Form.create()(Register)
// npm install moment --save
//  http://momentjs.cn/ 