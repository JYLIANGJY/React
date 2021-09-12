import React,{Component} from 'react'
import {Form,Input, Button,message,Icon} from 'antd'
class Login extends Component{
  handleSubmit=()=>{
    let users=this.props.form.getFieldsValue();
    this.props.form.validateFields((err,values)=>{
      if(!err){
        message.success(`${users.userName}登录成功,密码是:${values.userPwd}`)
      }
    })
  }
    render(){
      const {getFieldDecorator}=this.props.form;
        return(
            <div>
              <Form style={{width:300}}>
                <Form.Item>
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
                        message:'用户名必须为英文或者是数字'
                      }]
                    })(<Input prefix={<Icon type='user'></Icon>} placeholder="请输入用户名"></Input>)
                  }
                    
                </Form.Item>
                <Form.Item>
                  {
                    getFieldDecorator('userPwd',{
                      initialValue:'',
                      rules:[
                        {
                          required:true,
                          message:'密码不能为空'
                        }
                      ]
                    })(<Input type="password" prefix={<Icon type='lock'></Icon>} placeholder="请输入密码"></Input>)
                  }
                
                </Form.Item>
                <Form.Item>
                  <Button type="primary" onClick={this.handleSubmit}>
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
        )
    }
}
export default Form.create()(Login)