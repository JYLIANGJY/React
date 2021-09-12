import React,{Component}from 'react'
function ShowMessage(){
    function handleClick(e){
        let {clientX,clientY}=e;
        setTimeout(function(){
            console.log(clientX,clientY)
        },1000)
    }
    return (
        <button onClick={handleClick}>单击操作</button>
    )
}
export default ShowMessage