const MyReact=(function(){
    // 开辟了一个存储Hooks的存储空间。
    let hooks=[];
    // 索引值
    let currentHook=0;
    return {
        useState(initValue){
            // hooks[0]=""
            hooks[currentHook]=hooks[currentHook]||initValue;
            const setStateHookIndex=currentHook;
            const setState=newState=>(hooks[setStateHookIndex]=newState)
            return [hooks[currentHook++],setState]
        },
        render(Component){
 
        }           
        
    }
 })()

//  const [inputValue,valueChange]=useState("")