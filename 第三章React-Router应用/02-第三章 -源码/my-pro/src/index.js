import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// JSX语法
// let msg=<h1>你好<span>张三</span></h1>

// 嵌入JS表达式
//  let userName='李四'
//  function fullName(user){
//      return user.firstName+user.lastName
//  }
// let msg=<h1>你好<span>{userName}</span><span>{1}</span><span>{fullName({firstName:'王',lastName:'五'})}</span></h1>

// 条件渲染
// let isResult=false;
// function showUserName(user){
//    if(isResult){
//        return user.firstName+user.lastName
//    }
//    return user.firstName

// }
// let msg=<h1>你好<span>{showUserName({firstName:'li',lastName:'si'})}</span></h1>

//列表渲染
// let users=[{id:1,userName:'张三'},{id:2,userName:''}]
// let msg=<h1>你好,{
//       users.map(function(userInfo){
//     //   return <span key={userInfo.id}>{userInfo.userName}</span>
//       return userInfo.userName.length>0?<span key={userInfo.id}>{userInfo.userName}</span>:null;
//       })
//     }</h1>


//属性处理
// import imgUrl from './mm.jpg'
// import './style.css'
// // let msg=<div>你好<img src={imgUrl} style={{width:'200px',height:'200px'}}/></div>
// let msg=<div>你好<img src={imgUrl} className='imgStyle' /></div>
// ReactDOM.render(msg, document.getElementById('root'));

// let element=React.createElement('h1',null,'Hello World')
// let element = React.createElement('div',null,React.createElement('span',null,'Hello'))
// let element=<div><span>您好</span></div>
// console.log(element) //虚拟DOM:用来描述真实DOM的JS对象。
// ReactDOM.render(element, document.getElementById('root'));

// render方法模拟实现

// let element=<div className='blue'>Hello World</div>;
// console.log(element)
// let obj={
//     type:'div',
//     props:{
//         className:'blue',
//         children:'Hello'
//     }
// }

// let obj={
//     type:'div',
//     props:{
//         children:{
//             type:'span',
//            props:{children:'Hello World'}
//         }
//     }
// }
// let element=<div><span>Hello World</span></div>

// function render(element,container) {
//     //解构
//     let {type,props}=element;
//     // 根据type创建出对应的元素
//    let ele=document.createElement(type);
//    for(let attr in props){
//        if(attr==='children'){
//            if(typeof props[attr]==='string'){
//             let nodeText=document.createTextNode(props[attr]);
//             ele.appendChild(nodeText);
//            }else{
//                render(props[attr],ele);
//            }
 
//        }else if(attr==='className'){
//         ele.setAttribute('class',props[attr]);
//        }
//        else{
//            ele.setAttribute(attr,props[attr])
//        }
//    }
// // 把创建好的元素追加到容器中.
// container.appendChild(ele);
// }
// render(obj,document.getElementById('root'))

//函数组件创建
// function Message(){
//     return (
//         <div>
//             <h1>你好，hello world</h1>
//         </div>
//     )
// }
// let Message =(props)=><div><h1>你好:{props.name},年龄:{props.age}</h1></div>
// let Message =({name,age})=><div><h1>你好:{name},年龄:{age}</h1></div>
// ReactDOM.render(<Message name="张三" age='18'/>, document.getElementById('root'));

// 类组件创建
// class Message extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>你好啊啊</h1>
//             </div>
//         )
//     }
// }
// import Message from './1、组件封装/Message'
// import Message from './2、事件绑定/Message'
// import Message from './3、事件对象/Message'

// import EventMessage from './4、事件流问题/index'
// import ShowMessage from './5、事件对象补充说明'
// import ShowMessage from './6、组件中的state和setState'
// import ShowMessage from './7、事件处理中的this问题'

// import ShowMessage from './8、通过箭头函数解决this问题'

// import ShowMessage from './9、利用bind方法解决this问题'
// import ShowMessage from './10、setState方法的原理说明'

// import ShowMessage from './11、setState方法第二种语法'
// import ShowMessage from './12、setState方法第二个参数'
// import ShowMessage from './13、受控组件介绍'
// import ShowMessage from './14、富文本框应用'
// import ShowMessage from './15、下拉框应用'

// import ShowMessage from './16、复选框应用'
// import ShowMessage from './17、表单处理优化'
// import ShowMessage from './18、非受控组件应用'

// import ShowMessage from './19、简单TodoList案例'

// import App from './20、props基本使用'
// ReactDOM.render(<App userName={'lisi'} age={16} arr={['学习','睡觉']} fn={()=>{console.log('abc')}}/>, document.getElementById('root'));

// import App from './21、props中的children属性'
// function Message(){
//     return(<button>按钮</button>)
// }
// ReactDOM.render(<App><p>aaa</p><p>bbbb</p></App>, document.getElementById('root'));

// import App from './22、props校验'
// ReactDOM.render(<App num={'10'} names={{name:'zhangsan'}} func={()=>{console.log('abc')}} ele={<p>Hello</p>}/>, document.getElementById('root'));

// import App from './23、props默认值'
// ReactDOM.render(<App num={60}/>, document.getElementById('root'));
// import App from './24、父组件向子组件传递数据'

// import App from './25、子组件向父组件传递数据'

// import App from './26、兄弟组件通信'

// import App from './27、使用自定义事件的方式组件通信'
// import App from './28、跨级组件通信'
// import App from './29、完善TodoList案例'
// import App from './30、生命周期---挂载阶段'
// import App from './31、生命周期---更新阶段'
// import App from './32、生命周期---卸载阶段'

// import App from './33、shouldComponentUpdate方法应用'

// import App from './34、高阶组件案例'
// import App from './35、高阶组件案例---权限校验'

// import App from './36、高阶组件案例---权限校验2'
// import App from './37、用户管理'



// import App from './37、用户管理/indexApp'
// import UserInfoModel from './37、用户管理/userInfoModel'
// let model=new UserInfoModel();
// function render(){
//     ReactDOM.render(<App model={model}/>, document.getElementById('root'));
// }
// model.subscribe(render)
// render();//第一次打开页面的时候，调用该方法，进行页面的渲染。



// import React from 'react';
// import React,{Component} from './39、模拟实现createElement方法/reactDemo' 
// import ReactDOM from './39、模拟实现createElement方法/reactDom'
// // import ReactDOM from 'react-dom';
// function  Comp(props) {
//     return (
//         <div>            
//             Hello:{props.name}           
//         </div>
//     )

// }
// class Hello extends Component{
 
//     render() {
//         return (
//             <div>
//             <h3>类组件</h3>
//             </div>
//         )
//     }
// }
// const JSX=(
//     <div>
//         <Comp name='zhangsan' />
//         <Hello/>
//         <span>欢迎访问本网站</span>
//     </div>
// )

//  ReactDOM.render(JSX, document.getElementById('root'));
//  let element=React.createElement('h1',null,'Hello World')




// import App from './40、路由基本使用'
// import App from './41、编程式导航'
// import App from './42、默认路由'

// import App from './43、路由匹配模式'


// import App from './44、路由参数'

// import App from './45、路由嵌套'

// import App from './46、路由封装处理/router'
// import App from './47、路由嵌套封装/router'
// import App from './48、重定向处理'
import App from './49、路由综合案例应用'

ReactDOM.render(<App/>, document.getElementById('root'));


// ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
