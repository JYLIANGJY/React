import Link from 'next/link'
const Nav=()=>{
    return(
        <div>
            <Link href={{pathname:'/test'}}>测试</Link>
            <Link href={{pathname:'/test'}}>测试2</Link>
        </div>    
    )
}
export default Nav