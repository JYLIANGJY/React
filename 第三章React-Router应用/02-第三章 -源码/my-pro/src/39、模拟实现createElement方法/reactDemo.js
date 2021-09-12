
import {createVNode}  from './vdom'
function createElement(type,props,...children) {
   props.children=children;
   delete props.__source;
// 对type类型进行判断(原生标签，函数组件，类组件)
let vtype
    if(typeof type==='string'){
        vtype=1
    }else if(typeof type==='function'){
        // 类组件与函数组件在类型判断的时候都是function
        if(type.isClassComponent){
            vtype=2;// 表示类组件
        }else{
            vtype=3;// 表示函数组件
        }
    }
  return  createVNode(vtype,type,props)
//    return {type,props}
}
export class Component{
    constructor(props){
        this.props=props;
        this.state={}
    }
    static isClassComponent=true;
    setState(state){

    }
}
export default {createElement}