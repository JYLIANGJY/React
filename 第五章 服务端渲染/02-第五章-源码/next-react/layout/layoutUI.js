import Nav from '../components/nav'
const LayoutUI=(props)=>{
    return(
        <div>
            <Nav></Nav>
            {
                props.children
            }
            <div>
                footer
            </div>
        </div>
    )
}
export default LayoutUI