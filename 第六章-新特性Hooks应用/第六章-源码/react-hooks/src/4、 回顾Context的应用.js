import React from 'react'
const NumberContext=React.createContext();
// Provider  Consumer
function Example(){
   return(
       <NumberContext.Provider value={30}>
           <div>
               <Display/>
           </div>
       </NumberContext.Provider>
   )
}
function Display(){
   return(
       <NumberContext.Consumer>
           {(value)=>(<div>传递过来的数据是{value}</div>)}
       </NumberContext.Consumer>
   )
}

export default Example