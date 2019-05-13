import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import {GlobalStyle} from "./style";
import { Iconfont } from './statics/iconfont/iconfont'
import Header from './commom/header'
function App() {
  return (
     <Provider store={store}>
     <GlobalStyle/>
     <Iconfont/>
       <Header className='new'>
       </Header>
     
     </Provider>
      
   
  
  );
}

export default App;
