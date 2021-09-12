import React from 'react'
class App extends React.Component{
    constructor(props){
        super(props);
        console.log(props); 
        // this.props.children();//执行传递过来的函数
      }      
    render() {     
        return (
            <div>                
    {/* <h1>children属性:{this.props.children}</h1> */}
   {React.Children.map(this.props.children,e=>{
       return e
   })}
            </div>
        )
 }
}
export default App