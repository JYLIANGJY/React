import React from 'react';
import {useState,useEffect} from 'react'
// class Example extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0
//       };
//     }
//     // componentDidMount(){
//     //   document.title=`You clicked ${this.state.count} times`
//     // }
//     // componentDidUpdate(){
//     //   document.title=`You clicked ${this.state.count} times`
//     // }
//     render() {
//       return (
//         <div>
//           <p> {this.state.count} </p>
//           <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//            单击
//           </button>
//         </div>
//       );
//     }
//   }
//   export default  Example

// function Example(){
//    const [count,setCount]=useState(0);
//    // 类似于componentDidMount和componentDidUpdate
//    useEffect(()=>{
//     document.title=`You clicked ${count} times`
//    })
//    return(
//     <div>
//          <p> {count} </p>
//             <button onClick={() => setCount(count+1)}>
//                单击
//               </button>
//             </div>
//    )
// }

function Example(){
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8081/api/getProductList')
        .then(res=>res.json())
        .then(json=>(
            setPosts(json.message.map(item=>item))
        ))
    },[setPosts])
    return(
        <div>
            <ul>
                {
                    posts.map(post=>(
                        <li key={post.id}>
                            {post.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default  Example