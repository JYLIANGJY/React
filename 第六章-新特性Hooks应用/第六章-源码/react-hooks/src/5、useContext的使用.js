import React,{useContext} from 'react'
const NumberContext=React.createContext();
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
//    return(
//        <NumberContext.Consumer>
//            {(value)=>(<div>传递过来的数据是{value}</div>)}
//        </NumberContext.Consumer>
   
//    )
 const value= useContext(NumberContext)
 return(
     <div>
         数据为:{value}
     </div>
 )

}

export default Example