import {connect} from 'react-redux'
import Counter from '../components/counter'
const mapStateToProps =state=>{
    return{
        foo:'bar',
        value:state
    }
}
const mapDispatchToProps =dispatch=>{
    return{
        handleClick(){
           //console.log('hello');
           dispatch({type:'ADD'})
        }
    }
}
const CounterContainer= connect(mapStateToProps,mapDispatchToProps)(Counter)

export default CounterContainer