import React from 'react';
import PropTypes from 'prop-types';
import './NotFound.scss';

export class NotFound extends React.Component {
  render() {
           return (
             <div className='not-found'>
               <span className='not-found__message'>
                 Page not found!
               </span>
             </div>
           );
       }
}

