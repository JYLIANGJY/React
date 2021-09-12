import React,{Component}from 'react'
class App extends Component{
   constructor(props){
       super(props)
       console.log('生命周期----constructor')
   }
   componentDidMount(){
       console.log(document.getElementById('btn'))
    console.log('生命周期----componentDidMount')
   }
    render(){
        console.log('生命周期----render')
        return(<div>
            <button id='btn'>单击</button>
        </div>)
    }
}
export default App