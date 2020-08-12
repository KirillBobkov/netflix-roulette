// @flow
import * as React from 'react';
import { MainWrapper } from './Main.styles';

type MainProps = {
  children?: React.Node
}

export const Main = (props : MainProps) => <MainWrapper>{props.children}</MainWrapper>;
