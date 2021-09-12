import React, { useState, useEffect, useRef } from 'react';
// 自定义Hook,必须以use开头
function useCount(defaultValue){
    const [count,setCount] = useState(defaultValue);
    const timerID = useRef();
    useEffect(() => {
        timerID.current = setInterval(()=>{
            setCount(count => count + 1);
        }, 1000); 
      }, []);
      useEffect(()=>{
        if(count > 10){  
            clearInterval(timerID.current);
        }
    });
    // 将状态，以及对应的方法返回
   return [count,setCount]
}
function Example(){
    const[count,setCount] =useCount(0)
    return(<div>
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>单击</button>

    </div>)
}
export default Example