import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import {GlobalStyle} from "./style";
import { Iconfont } from './statics/iconfont/iconfont';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/home';
import Detail  from './pages/detail'
import Login   from './pages/Login'
import Header  from './commom/header';
function App() {
  return (
     <Provider store={store}>
     <GlobalStyle/>
     <Iconfont/>
      
       {/**?开始使用路由*/}
       <BrowserRouter>
       <Header className='new'/>
     
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
          <Route path='/login' exact component={Login}></Route>
       </BrowserRouter>
     
     </Provider>
      
   
  
  );
}

export default App;
