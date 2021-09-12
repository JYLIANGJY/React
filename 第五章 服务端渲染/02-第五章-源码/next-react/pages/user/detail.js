import {withRouter} from 'next/router'
const Detail=withRouter((props)=>(
    <div>
        用户{props.router.query.amp?props.router.query.amp:props.router.query.id}的详细信息
    </div>
))
export default Detail