import React from 'react'
import fetch from 'isomorphic-unfetch'
// const FetchData=(props)=>(
//     <div>
//         <h3>获取服务端数据</h3>
//         <ul>
//             {
//                 props.productList.map(item=>(
//                     <li key={item.id}>
//                         {item.title}
//                     </li>
//                 ))
//             }
//         </ul>
//     </div>
// )
// // 当页面初次加载时，只会在服务端执行一次，在路由的切换时客户端才会被执行。
// FetchData.getInitialProps=async function(){
//   let res=await fetch(" http://localhost:8081/api/getProductList")
//  let data=await res.json();
//  return {productList:data.message}
// }

// export default FetchData

export default class extends React.Component{
    static async getInitialProps(){
        let res=await fetch(" http://localhost:8081/api/getProductList")
        let data=await res.json();
        return {productList:data.message}
    }
    render(){
        return(
            <div>
                 <ul>
             {
                this.props.productList.map(item=>(
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))
            }
        </ul>
            </div>
        )
    }
}
// npm install --save isomorphic-unfetch