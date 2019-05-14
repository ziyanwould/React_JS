import React ,{Component} from 'react' ;
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

class Header extends Component{

    getListArea = () =>{
        //结构赋值
        const { focused ,list,page,mouseIn,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props;
        const newList = list.toJS();//munmutable对象 转变成普通的js对象
        const pageList = [];
        if(newList.length){
            for(let i = (page -1)*10;i< page * 10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        
        if(mouseIn || focused){
            return(
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch
                     onClick={()=>handleChangePage(page,totalPage)}
                    >换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {
                        pageList
                    }
                  
                   
                </SearchInfoList>
            </SearchInfo>
            )
        }else{
            return null
        }
    }
    render(){
        const { focused,handleInputFocus ,handleInputBlur} = this.props;
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
                            in={focused}
                            timeout={200}
                            className='slide'
                        >
                            <NavSearch className={focused ? 'focused':''}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont':'iconfont'}>&#xe637;</i>
    
                        {
                            this.getListArea()
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
}



const mapStateToProps =(state) =>{
 return{
     //immutable 需要用.get()方法来获取属性值
     //使用 redux-immutable 让state 变成immutable 对象
    //focused :state.get('header').get('focused')连续 使用推荐 以下写法
    focused:state.getIn(['header','focused']),
    list:state.getIn(['header','list']),
    page:state.getIn(['header','page']),
    mouseIn:state.getIn(['header','mouseIn']),
    totalPage:state.getIn(['header','totalPage']),

 }
}

const mapDispathToProps =(dispatch) =>{
   return{
    handleInputFocus(){
        dispatch(actionCreators.getList())
        dispatch(actionCreators.searchFocus())
    },
    handleInputBlur(){
      
        dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter(){
        dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
        dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page,totalPage){
        if(page<totalPage){
            dispatch(actionCreators.changePage(page + 1))
        }else{
            dispatch(actionCreators.changePage(1))
        }
       
    }
 } 
}
export default connect(mapStateToProps,mapDispathToProps)(Header);