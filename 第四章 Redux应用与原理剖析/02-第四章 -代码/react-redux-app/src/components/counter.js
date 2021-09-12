import React from 'react';
const Counter=(props) =>{
    return(<div>
        <h3>{props.value}</h3>
        <button onClick={props.handleClick}>增加</button>
        <button>递减</button>
    </div>)
}
export default Counter