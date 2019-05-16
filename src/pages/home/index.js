import React,{Component} from 'react';
import {connect} from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import axios from 'axios';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight

} from './style'

class Home extends Component {
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
            </HomeWrapper>
        )
    }
    //通过生命周期函数来发送ajax请求
    componentDidMount(){
        axios.get('/api/home.json').then((res) =>{
            const result = res.data.data;
            const action ={
                type:'change_home_data',
                articleList:result.articleList,
                recommendList:result.recommendList,
                topicList:result.topicList
            }
           this.props.changeHomeData(action)
        })
    }
}
const mapDispath = (dispatch) => ({
    changeHomeData(action){
        dispatch(action);
    }
});

export default connect(null,mapDispath)(Home);