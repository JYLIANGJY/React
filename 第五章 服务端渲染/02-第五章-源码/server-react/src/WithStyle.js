import React,{Component} from 'react'
export default(DepComponent,styles)=>{
    return class NewComponent extends Component{
        constructor(props){
            super(props);
            if(styles._getCss){
                //console.log('style=',styles._getCss())
                this.props.staticContext.css=styles._getCss()
            }
        }
        render(){
            return (<DepComponent {...this.props}></DepComponent>)
        }
    }
}