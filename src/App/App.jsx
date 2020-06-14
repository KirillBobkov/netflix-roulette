import React from 'react';
import './App.scss';
import Header from '../Header';
import Main from '../Main';
import ToolBar from '../Toolbar';
import Sorting from '../Sorting';
import Movies from '../Movies';
import Footer from '../Footer';

export default () => (
   <>
      <Header> 
         <ToolBar />
      </Header>
      <Main>
         <Sorting/>
         <Movies/>
      </Main>
      <Footer/>
   </>
); 