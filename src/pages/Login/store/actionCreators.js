import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({//这个函数本质就是创建并返回一个对象
	type: constants.CHANGE_LOGIN,
	value:true
});

export const  logout= () => ({
	type: constants.CHANGE_LOGOUT,
	value:false
})

export const login = (accout,password) => {
	return (dispatch) => {
		axios.get('/api/login.json?account='+accout+'&password='+password).then((res) => {
			const result = res.data.data;
			if(result){
				dispatch(changeLogin())
			}
		
		}).catch(() => {
			alert('登录失败')
		})
	}
};