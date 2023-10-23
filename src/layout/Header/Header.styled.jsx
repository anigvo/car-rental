import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';
export const HeaderWrap = styled.header`
  display: flex;
  margin-bottom: 50px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #12141780;
  padding-left: 128px;
  padding-right: 128px;
`;
export const NavWrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`;
export const LinkButton = styled(NavLink)`
  font-weight: 700;
  padding: 24px 44px;
  color: #3470ff;
  font-size: 24px;
  line-height: 1.14;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
export const LogoWrap = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 40px;
  margin-right: 10px
`;

export const LogoTitle = styled.p`
  font-weight: 700;
  font-size: 35px;
  line-height: 1.24;
  color: #121417;
`;
