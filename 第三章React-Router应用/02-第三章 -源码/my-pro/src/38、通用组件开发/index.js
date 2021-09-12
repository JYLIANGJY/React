import React,{Component} from 'react';
 function withCreateForm(Comp){
     return class extends Component{
         constructor(props){
             super(props);
             this.options={};//表单的选项，例如表单的校验信息。
             this.state={};// 存储的是表单中的值。
         }
         handleChange=e=>{
             const {name,value}=e.target;
             this.setState({[name]:value},()=>{
                 this.validateForm(name)
             })
         }
         validateSubmit=cb=>{
             //获取所有的表单元素的name值。
            const results=Object.keys(this.options).map(field=>this.validateForm(field));
           const result=results.every(r=>r===true);// 如果校验成功的为true.
           cb(result);
         }
         // 表单元素获取到焦点
         handleFocus=e=>{
             const name=e.target.name;
             this.validateForm(name);
         }
         // 表单校验
        validateForm=fieldName=>{
            const rules=this.options[fieldName].rules;
            const result=rules.some(rule=>{
                if(rule.required){
                    if(!this.state[fieldName]){
                        this.setState({
                            // userNameErrorMessage:'用户名必须填写'
                            [fieldName+"ErrorMessage"]:rule.message
                        })
                        return true;
                    }
                }
            
            return false;

            });
            if(!result){
                this.setState({
                    [fieldName+"ErrorMessage"]:''
                })
            }
            return !result;
        }
         getFieldMsg=(fieldName,option,InputComp)=>{
             this.options[fieldName]=option;
            return(
                <div>
                    {
                        React.cloneElement(InputComp,{
                            name:fieldName,
                            value:this.state[fieldName]||'',
                            onChange:this.handleChange,
                            onFocus:this.handleFocus
                        })
                    }
                    {
                        this.state[fieldName+'ErrorMessage']&&(
                        <span style={{color:'red',fontSize:'14px'}}>{this.state[fieldName+'ErrorMessage']}</span>
                        )
                    }
                </div>
            )
         }
         render(){
             return <Comp {...this.props} getFieldMsg={this.getFieldMsg} validateSubmit={this.validateSubmit}></Comp>
         }
     }
 }

class Form extends Component{
    onSubmit=()=>{
        this.props.validateSubmit((result)=>{
            if(result){
                console.log('校验成功');
            }else{
                console.log('校验失败');
            }
        })
    }
    render(){
        const {getFieldMsg}=this.props
        return (
            <div>
                {
                    getFieldMsg('userName',{
                        rules:[{required:true,message:'用户名必须填写'}]
                    },  <input type='text'/>)
                }
              {
                      getFieldMsg('userPwd',{
                            rules:[{required:true,message:'用户密码必须填写'}]
                         },  <input type='password'/>)
              }
                
                <button onClick={this.onSubmit} >提交</button>
            </div>
        )
    }
}
const FormComponent =withCreateForm(Form)
class App extends Component{
    render(){
        return (
            <div>
             <FormComponent></FormComponent>
            </div>
        )
    }
}
export default App;