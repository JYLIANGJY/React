import React,{useState,memo} from 'react';
const Child=(porps)=>{
    console.log('子组件');
    return(
        <div>
            我是一个子组件
        </div>
    )
}
const ChildMemo=memo(Child)
function Example(){
    const[count,setCount] =useState(0);
    return(
        <div>
            <button onClick={(e)=>{setCount(count+1)}}>加1</button>
            <p>count:{count}</p>
            {/* <Child></Child> */}
            <ChildMemo></ChildMemo>
           
        </div>
    )
}
export default Example