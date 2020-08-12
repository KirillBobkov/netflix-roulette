// @flow
import React from 'react';
import { ButtonInnerWrapper } from './Button.styles';

type ButtonProps = {
  type: string,
  text: string,
  id: string,
  onClick: Function,
  reset: any,
  search: any,
  rightBorder: any,
  searchIcon: any,
  choosen: any,
  leftBorder: any
};

export const Button = (props : ButtonProps) => (
  <ButtonInnerWrapper
    choosen={props.choosen}
    reset={props.reset}
    leftBorder={props.leftBorder}
    rightBorder={props.rightBorder}
    search={props.search}
    searchIcon={props.searchIcon}
    type={`${props.type || 'button'}`}
    onClick={props.onClick}
    id={`${props.id || ''}`}
  >
    {props.text}
  </ButtonInnerWrapper>
);



