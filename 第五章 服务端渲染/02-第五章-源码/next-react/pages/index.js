import Link from 'next/link'
import Router from 'next/router'
import Nav from '../components/nav'
import MyLayOutUI from '../layout/layoutUI'
const Index=()=>{
    return(
        <div>
            Hello World
            <Link href={{pathname:'/test',query:{id:123}}}>
                <div style={{color:'blue'}}>
                <a>测试信息</a> 
                <p>aaa</p>
               </div>
                </Link>
              <span onClick={()=>Router.push('/test')}>测试</span>
              <span onClick={()=>Router.push({pathname:'/test',query:{id:123}})}>测试1</span>
              <hr/>
              <Nav></Nav>
              <hr/>
              <MyLayOutUI>
                  <p>Hello World</p>
              </MyLayOutUI>
              <hr/>
              <img src='/static/timg.jpg' alt=""/>
        </div>
    )
}
export default Index