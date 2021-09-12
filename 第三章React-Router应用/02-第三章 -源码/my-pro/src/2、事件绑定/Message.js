import React, { Component } from 'react'
// class Message extends Component{
//     handleClick(){
//         console.log('你好')
//     }
//     render(){
//         return (
//             <div>
//                 <h1>Hello</h1>
//                 <button onClick={this.handleClick}>单击我</button>
//             </div>
//         )
//     }
// }
function Message(){
    function handleClick(){
        console.log('Hello');
    }
    return (<div>
<h1>Hello World</h1>
<button onClick={handleClick}>单击我</button>
    </div>)
}
export default Message