import React from 'react' ;
import { connect } from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import  { actionCreators }  from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    Addition,
    SearchInfoTitle,
    Button,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    SearchInfo
} from './style' ;

const getListArea = (show) =>{
    if(show){
        return(
            <SearchInfo>
            <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch>换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
                <SearchInfoItem>教育</SearchInfoItem>
            </SearchInfoList>
        </SearchInfo>
        )
    }else{
        return null
    }
}
const Header = (props) =>{
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
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        className='slide'
                    >
                        <NavSearch className={props.focused ? 'focused':''}
                        onFocus={props.handleInputFocus}
                        onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont':'iconfont'}>&#xe637;</i>

                    {
                        getListArea(props.focused)
                    }
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
const mapStateToProps =(state) =>{
 return{
     //immutable 需要用.get()方法来获取属性值
     //使用 redux-immutable 让state 变成immutable 对象
    //focused :state.get('header').get('focused')连续 使用推荐 以下写法
    focused:state.getIn(['header','focused'])

 }
}

const mapDispathToProps =(dispatch) =>{
   return{
    handleInputFocus(){
        dispatch(actionCreators.searchFocus())
    },
    handleInputBlur(){
      
        dispatch(actionCreators.searchBlur())
    }
 } 
}
export default connect(mapStateToProps,mapDispathToProps)(Header);