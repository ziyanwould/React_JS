import * as constants from './constants';
import { fromJS } from 'immutable';// 把js对象变成 immutable对象 防止直接改变 维护react设计初衷理念
const defaultState = fromJS({ 
    focused:false
});
//immutable 避免自己不小心把state值给更改了
export default (state = defaultState,action)=>{
if(action.type === constants.SEARCH_FOCUS){
    //immutable 对象的set方法，会结合之前immutable对象的值
    //和设置的值，放回一个全新的对象
    return state.set('focused',true);//set()的变更不是直接变更
}
if(action.type === constants.SEARCH_BLUR){
    return state.set('focused',false);
}

return state;
}