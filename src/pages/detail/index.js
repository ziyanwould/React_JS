import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DetailWrapper, Header, Content } from './style';
import { actionCreators } from './store';

class Detail extends PureComponent {
	render() {
		//console.log(this.props.match.params.id)
		return (
			<DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content 
					dangerouslySetInnerHTML={{__html: this.props.content}}
					/* 不想标签被转译的用法 dangerouslySetInnerHTML={{__html: 内容}} */
				/>
			</DetailWrapper>
		)
	}

	componentDidMount() {
		//生命周期函数 进行ajax请求
		this.props.getDetail(this.props.match.params.id);
	}
}

const mapState = (state) => ({
	title: state.getIn(['detail', 'title']),
	content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
	getDetail(id) {
		dispatch(actionCreators.getDetail(id));
	}
});

export default connect(mapState, mapDispatch)(withRouter(Detail));
