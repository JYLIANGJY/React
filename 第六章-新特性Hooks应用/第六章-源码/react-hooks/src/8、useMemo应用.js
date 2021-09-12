import React,{useState,useMemo} from 'react';
const Child=(props)=>{
   
    function changeName(name) {
        console.log('111');
        return name+'改变了name'
    }
    // const otherName =changeName(porps.name);
    const otherName =useMemo(()=>changeName(props.name),[props.name]);
    return (
        <div>
           <div>{otherName}</div>
    <div>{props.children}</div>
        </div>
    )
}
// 创建memo
const ChildMemo=Child
function Example(){
    const[count,setCount] =useState(0);
    const[name,setName]=useState('子组件')
    return(
        <div>
            <button onClick={()=>{setCount(count+1)}}>加1</button>
            <p>count:{count}</p>
            <button onClick={()=>{setName(new Date().getTime())}}>改变姓名</button>
    <ChildMemo name={name}>{count}</ChildMemo>
        </div>
    )
}
export default Example