import React, { useState, useEffect, useRef } from 'react';
export default function App(){
    const [count,setCount]=useState(0)
    const couterRef=useRef()
    useEffect(()=>{
        couterRef.current=setInterval(()=>{
            setCount(count=>count+1)
        },1000)
    },[])// 空数组表示只有第一次渲染的时候执行useEffect函数。
    useEffect(()=>{
        if(count>10){
            clearInterval(couterRef.current)
        }
    })

    return(
        <div>
            <p>
                {count}
            </p>
            <button  onClick={()=>{setCount(count+1)}}>单击</button>
        </div>
    )
}