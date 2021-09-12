// const React=require('react')
import React from 'react'
import Common from '../Common'
import {connect} from 'react-redux'
import {getProductList} from './store/actions'
import styles from './style.css'
import withStyle from '../../WithStyle'
// const Home=(props)=>{
//     return (<div>Hello World {props.userName}
//         <Common></Common>
//         <button onClick={()=>{alert('Hello World')}}>单击</button>
//     </div>)
    
// }

class Home extends React.Component{
   constructor(props){
       super(props)
    //    if(styles._getCss){
    //        //console.log('style=',styles._getCss())
    //        this.props.staticContext.css=styles._getCss()
    //    }
   }
    componentDidMount(){
        if(this.props.productList.length<=0){
            this.props.getProductList();
        }
       
    }
   
    render(){
        return(
            <div>Hello World {this.props.userName}
        <Common></Common>
        <button onClick={()=>{alert('Hello World')}}>单击</button>
        <br/>
            <ul>
                {
                    this.props.productList.map((item)=>{
                        return(<li key={item.id} className={styles.title}>
                            {item.title}
                        </li>)
                    })
                }
            </ul>
         </div>
        )
    }
}
// Home.loadData=(store)=>{
//    return store.dispatch(getProductList())
// }


const mapDispatchToProps =dispatch =>({
    getProductList(){
       // console.log('abab')
      dispatch(getProductList())
        // axios
    }
})
const mapStateToProps=state=>({
    userName:state.homeReducer.userName,
    productList:state.homeReducer.productList
})
// module.exports={default:Home}
const ExportHome=connect(mapStateToProps,mapDispatchToProps)(withStyle(Home,styles))
ExportHome.loadData=(store)=>{
    return store.dispatch(getProductList())
 }
 export default ExportHome