export function initVNode(vnode){
   const {vtype}=vnode;
   if(!vtype){
       return document.createTextNode(vnode);
   }
   if(vtype===1){
    //    创建原生节点
       return createElement(vnode)
   }else if(vtype===2){
       // 表示类组件
       return createClassComp(vnode);
   }else{
       // 表示的是函数组件
       return createFunComp(vnode);
   }

}
function createElement(vnode){
    const {type,props}=vnode;
    const node=document.createElement(type);
    const {children,...rest}=props;
    Object.keys(rest).forEach(attr=>{
        if(attr==='className'){
            node.setAttribute('class',rest[attr]);
        }else{
            node.setAttribute(attr,rest[attr]);
        }
    })
   children.forEach(a=>{
     node.appendChild(initVNode(a))
   })
  return node;
}
// 类组件的创建
function createClassComp(vnode){
    const {type,props}=vnode;
    const component=new type(props)
    const newNode=component.render()
   return   initVNode(newNode)
}
// 函数组件的处理
function createFunComp(vnode){
    const {type,props}=vnode;
   const newNode= type(props);
   return   initVNode(newNode)
}

export function createVNode(vtype,type,props){
    const vnode={
        vtype,type,props
    };
    return vnode;
}