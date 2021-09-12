const defaultState={
    userName:'zhangsan',
    productList:[]
}
export default(state=defaultState,action)=>{
    switch(action.type){
        case 'getProductList':
            return {
                ...state,
                productList:action.list
            }
        default:
            return state
    }
}