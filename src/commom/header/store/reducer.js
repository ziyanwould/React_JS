import * as constants from './constants';
import { fromJS } from 'immutable';// 把js对象变成 immutable对象 防止直接改变 维护react设计初衷理念
const defaultState = fromJS({ 
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
});
//immutable 避免自己不小心把state值给更改了
export default (state = defaultState,action)=>{
// if(action.type === constants.SEARCH_FOCUS){
//     //immutable 对象的set方法，会结合之前immutable对象的值
//     //和设置的值，放回一个全新的对象
//     return state.set('focused',true);//set()的变更不是直接变更
// }
// if(action.type === constants.SEARCH_BLUR){
//     return state.set('focused',false);
// }
// if(action.type === constants.CHANGE_LIST){
//     return state.set('list',action.data);
// }

//用switch代替if嵌套

    switch(action.type){
        case   constants.SEARCH_FOCUS:
            return state.set('focused',true);
        case   constants.SEARCH_BLUR:
            return state.set('focused',false);
        case   constants.CHANGE_LIST:
            //return state.set('list',action.data).set('totalPage',action.totalPage); 使用简写 merge()方法 
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })
        case   constants.MOUSE_ENTRE:
            return state.set('mouseIn',true);
        case   constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case   constants.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state
    }


}