import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList:[{
       id:1,
       title:'社会热点',
       imgUrl:'https://cdn2.jianshu.io/assets/web/wxb-a216456895eb66c17497dbd3da443cf8.png'
    },
    {
        id:2,
        title:'手绘',
        imgUrl:'https://cdn2.jianshu.io/assets/web/wxb-a216456895eb66c17497dbd3da443cf8.png'
     }
]
});

export default (state = defaultState,action) =>{
    switch(action.type){
        default:
          return state;
    }
}