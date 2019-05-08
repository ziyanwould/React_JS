import React from 'react';
import {GlobalStyle} from "./style";
import { Iconfont } from './statics/iconfont/iconfont'
import Header from './commom/header'
function App() {
  return (
     <div>
     <GlobalStyle/>
     <Iconfont/>
       <Header className='new'>
       </Header>
     
     </div>
      
   
  
  );
}

export default App;
