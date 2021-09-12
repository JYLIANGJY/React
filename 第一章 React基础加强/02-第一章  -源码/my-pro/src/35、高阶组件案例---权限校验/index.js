import React,{Component} from 'react';
function withAdminAuth(WrappedComponent){
    return class extends Component{
        state={
            isAdmin:false
        }
        componentDidMount(){
            const currentRole='student';
            this.setState({
                isAdmin:currentRole==='Admin'
            })
        }
        render(){
            if(this.state.isAdmin){
                return <WrappedComponent {...this.props} />
            }else{
                return <div>您没有权限查看该页面，请联系管理员</div>
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
class PageB extends Component{
    render(){
        return (<div>
            B页面的内容
        </div>)
    }
}
const PageAComponent =withAdminAuth(PageA)
const PageBComponent =withAdminAuth(PageB)
class App extends Component{
    render() {
        return (
            <div>
                <h1>高阶组件应用案例</h1>  
                <PageAComponent/>
                 <PageBComponent/>            
            </div>
        )
    }
}
export default App
