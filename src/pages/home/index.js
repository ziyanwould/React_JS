import React,{Component} from 'react';
import {connect} from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { actionCreators } from './store'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop

} from './style'

class Home extends Component {
    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img alt="" className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
                }
                
            </HomeWrapper>
        )
    }
    //通过生命周期函数来发送ajax请求
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();//给生命周期钩子函数绑定事件
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapState= (state)=> ({
    showScroll :state.getIn(['home','showScroll'])
})
const mapDispath = (dispatch) => ({
    changeHomeData(){
    
      dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow(){
     if(document.documentElement.scrollTop > 100 ){
        dispatch(actionCreators.toggleTopShow(true));
     }else{
        dispatch(actionCreators.toggleTopShow(false));
     }
    }
});

export default connect(mapState,mapDispath)(Home);