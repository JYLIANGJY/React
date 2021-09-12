import Link from 'next/link'
const userList=[{id:1,userName:'zhangsan'},{id:2,userName:'lisi'}]
const User=()=>{
    return(
        <div>
            用户信息
            <hr/>
            <ul>
                {
                    userList.map(item=>{
                        return(
                            <li key={item.id}>
                                <Link as={`user/detail/${item.id}`} href={{pathname:'/user/detail',query:{id:`${item.id}`}}}>
                                    <a>{item.userName}</a>
                                </Link>
                              
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default User