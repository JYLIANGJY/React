import React,{Component} from 'react';
import img from './image/cat.png'
// 创建高阶组件
function withMouse(WrappendComponent){
    class Mouse extends Component{
        state={
            x:0,
            y:0
        }
        handleMouseMove=e=>{
            this.setState({x:e.clientX, y:e.clientY});
        }
        componentDidMount(){
            window.addEventListener('mousemove',this.handleMouseMove)
        }
        componentWillUnmount(){
            window.removeEventListener('mousemove',this.handleMouseMove)
        }
        render(){
            console.log('高阶组件',this.props.num)
            return <WrappendComponent {...this.state} {...this.props}></WrappendComponent>
        }
    }
    return Mouse
}
function TestMouse(props) {
    console.log('num=',props.num)
    return(<div>
        鼠标的位置:x:{props.x},y:{props.y}
    </div>)
}
function TestImageMouse(props){
    return(
        <img src={img} alt='' style={{position: 'absolute',top: props.y-64,left:props.x-64}}/>
    )
}
const MouseComponent=withMouse(TestMouse)
const MouseImageComponent=withMouse(TestImageMouse)
class App extends Component{
    render(){
        return(<div>
            <h1>高阶组件</h1>
            <MouseComponent num={3}/>
            <MouseImageComponent num={6}/>
        </div>)
    }
}
export default App