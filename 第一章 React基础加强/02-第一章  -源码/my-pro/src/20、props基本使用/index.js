import React,{Component}from 'react'
// function ShowMessage(props) {
//     return (
//         <div>
// <h1>我叫{props.userName},年龄:{props.age}</h1>
//         </div>
//     )
// }
// export default ShowMessage

class App extends Component { 
    constructor(props) {
        super(props)
        console.log('props=',props)
    } 
    render() { 
        this.props.fn();  
        // this.props.userName='zhangsan';
      return (
            <div>
                <h1>我叫{this.props.userName},年龄:{this.props.age}</h1>
            </div>
        )
    }
}
export default App