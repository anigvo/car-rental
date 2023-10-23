import React from 'react';

import {
  HeaderWrap,
  LinkButton,
  NavWrapper,
  LogoWrap,
  Logo,
  LogoTitle,
} from './Header.styled.jsx';
import Image from '../../assets/images/logo.png';
export const Header = () => {
  return (
    <HeaderWrap>
      <LogoWrap to="/">
        <Logo alt="Logo" src={Image} />
        <LogoTitle>CAR RENTAL</LogoTitle>
      </LogoWrap>
      <NavWrapper>
        <LinkButton to="/">Home</LinkButton>
        <LinkButton to="/catalog">Catalog</LinkButton>
        <LinkButton to="/favorites">Favorites</LinkButton>
      </NavWrapper>
    </HeaderWrap>
  );
};
