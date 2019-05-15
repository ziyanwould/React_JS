import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import {GlobalStyle} from "./style";
import { Iconfont } from './statics/iconfont/iconfont';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail'
import Header from './commom/header';
function App() {
  return (
     <Provider store={store}>
     <GlobalStyle/>
     <Iconfont/>
       <Header className='new'>
       </Header>
       {/**?开始使用路由*/}
       <BrowserRouter>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
       </BrowserRouter>
     
     </Provider>
      
   
  
  );
}

export default App;
