import React from 'react';
import './App.scss';

function Hello1() {
  return React.createElement('div', null, `Привет, Мир!`);
}

class Hello2 extends React.Component {
  render() {
    return <div> Привет, Мир!</div>;
  }
}

class Hello3 extends React.PureComponent {
  render() {
    return <div> Привет, Мир!</div>;
  }
}

export default function App() {
   return ( 
   <>
    <Hello1/>
    <Hello2/>
    <Hello3/>
   </>
   );
}   