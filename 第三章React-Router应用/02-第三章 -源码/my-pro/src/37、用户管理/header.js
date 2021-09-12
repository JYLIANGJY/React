import React,{Component} from 'react';
const ENTRY_KEY = 13;
class TodoHeader extends Component{
   handleKeyDown=(event) =>{
       if(event.keyCode===ENTRY_KEY){
           event.preventDefault();
           let userInfo=event.target.value;
           event.target.value="";
           this.props.addUser(userInfo)
       }
   }
   render(){
       return (
           <div>
               <form>
                   <div className="form-group">
                       <input className="form-control" onKeyDown={this.handleKeyDown} autoFocus={true}/>
                   </div>
               </form>
           </div>
       )
   }
}
export default TodoHeader