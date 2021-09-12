import React,{Component} from 'react';
function withAuth(role){
    return function(WrappedComponent){
        return class extends Component{
            state={
                permission:false
            }
            componentDidMount(){
                const currentRole='VIP';
                this.setState({ permission:currentRole===role})
            }
            render(){
                if(this.state.permission){
                    return <WrappedComponent {...this.props}/>
                }else{
                    return <div>你没有权限查看该组件内容</div>
                }
            }
        }
    }
}
class PageA extends Component{
    render(){
        return (<div>
            A页面的内容
        </div>)
    }
}
 const PageAComponent=withAuth('Admin')(PageA)
class App extends Component{
    render() {
        return (
            <div>
                <h1>高阶组件应用案例</h1>  
              <PageAComponent/>
            </div>
        )
    }
}
export default App