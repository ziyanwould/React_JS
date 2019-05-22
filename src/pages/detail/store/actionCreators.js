import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title, content) => ({//这个函数本质就是创建并返回一个对象
	type: constants.CHANGE_DETAIL,
	title,
	content
});

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('/api/detail.json?id=' + id).then((res) => {
			const result = res.data.data;
			//console.log(result)
			dispatch(changeDetail(result.title, result.content));
		}).catch(() => {
			
		})
	}
};