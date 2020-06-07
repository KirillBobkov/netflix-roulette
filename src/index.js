import React from 'react';
import ReactDOM from 'react-dom';

function Hello1() {
  return React.createElement('div', null, `Привет, Мир!`);
}

class Hello2 extends React.Component {
  render() {
    return React.createElement('div', null, `Привет, Мир!`);
  }
}

class Hello3 extends React.PureComponent {
  render() {
    return React.createElement('div', null, `Привет, Мир!`);
  }
}

ReactDOM.render(
  React.createElement('div',
   null, 
   React.createElement(Hello1), 
   React.createElement(Hello2), 
   React.createElement(Hello3)),
  document.getElementById('root')
);