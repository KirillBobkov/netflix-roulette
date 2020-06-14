import React from 'react';
import './Header.scss';
import headerBackground from '../../assets/images/headerBackground.png';

export default (props) => (
  <header style={{ backgroundImage: `url('${headerBackground}')`}}>
    <div className="header">
       <h1 className='header__title'>
          <span className='header__title--bold'>netflix</span>roulette
        </h1>

       {props.children}
    </div> 
  </header>
);
