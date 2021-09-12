export default class UserInfoModel{
    constructor(){
        this.key="users";
        this.userList=localStorage.getItem(this.key)?JSON.parse(localStorage.getItem(this.key)):[{id:1,userInfo:'张三的信息',completed:false},{id:2,userInfo:'李四的信息',completed:true}]
        this.listeners=[];
    }
    subscribe(listener){
        this.listeners.push(listener);
    }
    emit(){
        this.listeners.forEach(listener=>listener())
    }
    addUser=(userInfo)=>{
        let userCount=this.userList.length;
        let id=userCount>0?this.userList[this.userList.length-1].id:0
        let newItem={id:id+1,userInfo:userInfo,completed:false}
        this.userList.push(newItem);
        this.notify(this.userList);
    }
    handleChange=(id)=>{
        let userList=this.userList;
       userList= userList.map(user=>{
            if(user.id===id){
               user.completed=!user.completed     
            }
            return user;
        })
        this.notify(userList)
    }

    handleRemove=(id)=>{
        console.log('aaa')
        let userList=this.userList;
       let index= userList.findIndex(user => user.id===id);
       userList.splice(index,1)
       this.notify(userList)
    }
    handleCheckAll=(event)=>{
        let userList=this.userList;
        let checked=event.target.checked;
       userList= userList.map(user=>{
            user.completed=checked;
            return user
        })
        this.notify(userList);
    }
    handleRemoveCompleted=()=>{
        let userList=this.userList;
        userList=userList.filter(user=>!user.completed)
        this.notify(userList);
    }

  notify(userList){
    localStorage.setItem(this.key,JSON.stringify(userList))
    this.emit();//数据发生了变化，调用emit函数执行监听的方法。
  }
}