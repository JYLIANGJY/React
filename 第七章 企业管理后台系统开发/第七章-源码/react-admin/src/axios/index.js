import axios from 'axios'
import Qs from 'qs'
export default class Axios{
    static ajaxAxios(options){
        const baseApi='http://localhost:8081/api';
        // http://www.axios-js.com/zh-cn/docs/#axios-post-url-data-config-1 
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params:(options.data&&options.data.params)||''
            }).then((response)=>{
                if(response.status===200){
                    let res=response.data;
                    resolve(res)
                }else{
                    reject(response)
                }
            })
        })
    }
    static ajaxPostAxios(options){
           const baseApi='http://localhost:8081/api';
        // http://www.axios-js.com/zh-cn/docs/#axios-post-url-data-config-1 
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'post',
                baseURL:baseApi,
                timeout:5000,
                headers:{'Content-Type':'application/x-www-form-urlencoded'},
                //title=商品1&price=123
                data:Qs.stringify(options.data)
              
            }).then((response)=>{
                if(response.status===200){
                    let res=response.data;
                    resolve(res)
                }else{
                    reject(response)
                }
            })
        })
    }
   
}