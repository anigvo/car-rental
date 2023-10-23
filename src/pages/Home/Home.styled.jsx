import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomeWrap = styled.div`
  padding-left: 128px;
  padding-right: 128px;
`;
export const HomeTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 34px;
  line-height: 1.14;
`;
export const HomeTitleSecondary = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 25px;
  line-height: 1.14;
  color: #3470ff;
`;
export const HomeContentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;
export const HomeContent = styled.div`
  width: 50%;
`;
export const HomeList = styled.ul`
  margin-bottom: 20px;
`;
export const HomeItem = styled.li`
  display: flex;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.18;
  margin-left: auto;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const HomeLink = styled(NavLink)`
  display: block;
  max-width: 350px;
  text-align: center;
  font-weight: 700;
  padding: 12px 34px;
  background-color: #3470ff;
  border-radius: 12px;
  font-size: 22px;
  line-height: 1.14;
  color: #ffffff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const HomeIcon = styled.div`
  color: #3470ff;
  margin-right: 10px;
`;
export const HomeImg = styled.img`
  width: 50%;
`;

export const HomeTerms = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
