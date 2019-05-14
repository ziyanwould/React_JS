import * as constants from './constants';
import {fromJS} from 'immutable'
import axios from 'axios';

export const searchFocus = ()=>({
 type:constants.SEARCH_FOCUS
});

export const searchBlur = ()=>({
    type:constants.SEARCH_BLUR
});

export const mouseEnter =() =>({
    type:constants.MOUSE_ENTRE
});

export const mouseLeave =() =>({
    type:constants.MOUSE_LEAVE
})

export const changePage =(page) =>({
    type:constants.CHANGE_PAGE,
    page
})

const changList = (data) =>({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length / 10)//形成页码 没页十条
});
export const getList = ()=>{
    return (dispatch) =>{ 
        console.log(123)
        axios.get('/api/headerList.json').then(res=>{
          const data = res.data;
          dispatch(changList(data.data))
        }).catch(()=>{
            console.log('error')
        })
    }
}