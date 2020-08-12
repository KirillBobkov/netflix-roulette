// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeaderWrapper,
  HeaderContainer,
  HeaderTitle,
  HeaderTitleContent,
} from './Header.styles';

type HeaderProps = {
    clearMoviesList: Function,
    clearFilter: Function,
    children? : React.Node
}

export const Header = (props : HeaderProps) => {
  const handleClearMovies = () => {
    props.clearMoviesList();
    props.clearFilter();
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Link to='/movies'>
          <HeaderTitle onClick={handleClearMovies}>
            <HeaderTitleContent>netflix</HeaderTitleContent>roulette
          </HeaderTitle>
        </Link>
        {props.children}
      </HeaderContainer>
    </HeaderWrapper>
  );
};
