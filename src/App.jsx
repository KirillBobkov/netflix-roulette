import React from 'react';
import './App.scss';
import Header from './Header';
import Main from './Main';
import ToolBar  from './Toolbar';
import Sorting  from './Sorting';

export default function App() {
   return (
      <>
         <Header> 
            <ToolBar />
         </Header>
         <Main>
            <Sorting/>
         </Main>
      </>
   );
}   