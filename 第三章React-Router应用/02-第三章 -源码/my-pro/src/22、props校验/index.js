import React from 'react'
import PropTypes from 'prop-types'
class App extends React.Component{
    render() {  
        const obj=this.props.names  
        // const list=arr.map((item)=><li key={item.id}>{item.name}</li>) 
        return (
            <div>                
               {                  
                <ul>
    <li>{obj.id}</li>
    <li>{obj.name}</li>
                </ul>
               }
             </div>
        )
    }
}
App.propTypes={
    // names:PropTypes.array,
    num:PropTypes.number,
    func:PropTypes.func.isRequired,
    ele:PropTypes.element,
    names:PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }) //{id:1,name:'zhangsan'}
}
export default App