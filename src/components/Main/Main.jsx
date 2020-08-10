// @flow
import * as React from 'react';
import './Main.scss';

type MainProps = {
  children?: React.Node
}

export const Main = (props : MainProps) => <main className='main'>{props.children}</main>;
