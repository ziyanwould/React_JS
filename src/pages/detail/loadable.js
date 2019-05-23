import React from 'react';
import Loadable from 'react-loadable';//为了解决首页加载缓慢 引进第三方组件 分块加载 

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {//未加载前现实的内容
  	return <div>正在加载</div>
  }
});

export default () => <LoadableComponent/>
