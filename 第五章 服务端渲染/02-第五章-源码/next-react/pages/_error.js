import Link from 'next/link'
const ErrorPage=()=>{
    return(<div>
         你访问的页面不存在!!
         <Link href='/index'>
             <a>返回首页</a>
         </Link>

    </div>)
}
export default ErrorPage