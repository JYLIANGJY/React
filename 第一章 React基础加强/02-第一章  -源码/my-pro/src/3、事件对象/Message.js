import React,{Component}from 'react'
function ShowMessage(){
    function handleClick(e){
        console.log(e.target.value)// 获取事件触发的元素。
    }
    function handleStopClick(e){
        e.preventDefault();
        console.log('阻止了页面的跳转');
    }
    return(
        <div>
            <button onClick={handleClick} value='btn'>点击</button>
            <a href='www.baidu.com' onClick={handleStopClick}>百度</a>
        </div>
    )
}
export default ShowMessage