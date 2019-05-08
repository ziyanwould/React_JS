import React, { Component } from 'react' ;
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    Addition,
    Button
} from './style' ;
class Header extends Component{
    render(){
        return (

            <HeaderWrapper>
             <Logo />
                <Nav>
                  <NavItem className='left active'>首页</NavItem>
                  <NavItem className='left'>下载App</NavItem>
                  <NavItem className='right'>登陆</NavItem>
                  <NavItem className='right'>
                  <i className="iconfont">&#xe636;</i>
                  </NavItem>
                  <SearchWrapper>
                  <NavSearch/>
                  <i className="iconfont">&#xe637;</i>
                  </SearchWrapper>
                </Nav>
                <Addition>
                   
                    <Button className='writting'><i className="iconfont">
                    &#xe602;</i>写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
    
    
}

export default Header;