import axios from 'axios'
const productList=(list)=>({
    type:'getProductList',
    list
})
export const getProductList=()=>{
    return (dispatch)=>{
        //Promise
       return axios.get('http://localhost:8081/api/getProductList').then((res)=>{
            const list=res.data.message;
           dispatch(productList(list))
        })
    }
}