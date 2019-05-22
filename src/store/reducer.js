// import { combineReducers } from 'redux-immutable';//使用redux-immutable代替redux 让js对象变成immutable 对象
// import {reducer as headerReducer} from '../commom/header/store'
// import {reducer as homeReducer} from '../pages/home/store'

// const reducer = combineReducers({
//     header:headerReducer,
//     home:homeReducer
// });

// export default reducer;
import { combineReducers } from 'redux-immutable';
import {reducer as headerReducer} from '../commom/header/store'
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
//import { reducer as loginReducer } from '../pages/login/store';

const reducer = combineReducers({
	header: headerReducer,
	home: homeReducer,
	detail: detailReducer
	//login: loginReducer
});

export default reducer;