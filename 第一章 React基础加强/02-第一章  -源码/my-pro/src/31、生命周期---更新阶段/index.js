import React,{Component}from 'react'
class App extends Component{
    constructor(props){
        super(props)
        console.log('生命周期----constructor')
    }
    componentDidUpdate(prevProps){
        // if(prevProps.data!==this.props.data){
        //     this.setState({})
        // }
        console.log('生命周期----componentDidUpdate')
        console.log(document.getElementById('btn'))
    }
    handleClick=()=>{
        this.forceUpdate()
    }
    render(){
        console.log('生命周期----render')
        return(<div>
            <button id='btn' onClick={this.handleClick}>单击</button>
        </div>)
    }
}
export default App