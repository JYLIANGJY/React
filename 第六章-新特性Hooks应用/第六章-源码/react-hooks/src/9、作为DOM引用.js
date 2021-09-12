import React, { useState, useEffect, useRef } from 'react';
export default function App(){
    const [count,setCount]=useState(0)
    const couterRef=useRef()
    useEffect(()=>{
        document.title=`The value is ${count}`;
        console.log(couterRef.current)
    },[count])
    return(
        <div>
            <button ref={couterRef} onClick={()=>{setCount(count+1)}}>单击</button>
        </div>
    )
}