import { combineReducers } from 'redux-immutable';//使用redux-immutable代替redux 让js对象变成immutable 对象
import {reducer as headerReducer} from '../commom/header/store'
import {reducer as homeReducer} from '../pages/home/store'

const reducer = combineReducers({
    header:headerReducer,
    home:homeReducer
});

export default reducer;