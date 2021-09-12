import React from 'react'
import {useState} from 'react'
import './style.css'
function TodoList(){
    const [inputValue,valueChange]=useState("")
    const [todos,setTodos]=useState([
        {id:1,content:'体育新闻',isCompeted:true},
        {id:2,content:'国际新闻',isCompeted:true}
])
function handleClick(e){
    e.preventDefault();
    setTodos([...todos,{id:Date.now(),content:inputValue,isCompeted:true}])
    valueChange("")
}
function handlDelete(index){
    setTodos(todos=>todos.slice(0,index))
}

       return(
        <div className="app">
            <form className="todo-list">
                <ul>
                    {
                        todos.map((item,index)=>(
                            <li className="todo" key={item.id} onClick={()=>handlDelete(index)}>
                                <div className="checkbox">
                                    <input type="checkbox" value={item.content}/>
                                </div>
                                {item.content}
                            </li>    
                        ))
                    }
                </ul>
                <input type="text" onChange={(e)=>valueChange(e.target.value)} value={inputValue}/>
                <button onClick={(e)=>handleClick(e)}>添加</button>
            </form>
        </div>
  
    )
}

export default TodoList