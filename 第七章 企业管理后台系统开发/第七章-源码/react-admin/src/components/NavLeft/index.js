import React,{Component} from 'react'
import { Menu } from 'antd';
import MenuConfig from '../../config/menuConfig'
import {Link} from 'react-router-dom'
import "./index.css"
const { SubMenu } = Menu;
class NavLeft extends Component{
    constructor(props){
        super(props)
        this.state={
            menuTree:[]
        }
    }
    componentDidMount(){
       const menuTree=this.loadMenu(MenuConfig)
       this.setState({menuTree})
    }
    loadMenu=(data)=>{
        return data.map((item)=>{
            if(item.children){
                return(
                    <SubMenu title={item.title} key={item.key}>
                        {this.loadMenu(item.children)}
                    </SubMenu>
                )
            }
        return  <Menu.Item title={item.title} key={item.key}>
        
            <Link to={item.key}> {item.title}</Link>
        
        </Menu.Item>
        })
    }
    render(){
        return(
            <div>
                <div className="logo">
                    <h1>后台管理系统</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTree}
                </Menu>
   {/* <Menu theme="dark">
            <SubMenu
            key="sub1"
            title={
                <span>
                <Icon type="mail" />
                <span>Navigation One</span>
                </span>
            }
            >
           
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
         
           
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
           
            </SubMenu>
    </Menu> */}
            </div>
        )
    }
}
export default NavLeft