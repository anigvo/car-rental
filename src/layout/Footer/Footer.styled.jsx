import styled from '@emotion/styled';

export const FooterWrap = styled.footer`
padding-top: 24px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #12141780;
  padding-left: 128px;
  padding-right: 128px;
`;

export const FooterText = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 32px;
  line-height: 1.14;
`;

export const FooterLink = styled.a`
  margin-left: 10px;
  font-weight: 600;
  color: #3470ff;
  font-size: 24px;
  line-height: 1.14;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
export const FooterList = styled.ul`
display: flex;
`;

export const FooterItem = styled.li`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.14;
  &:not(:last-child) {
    margin-right: 50px;
  }
`;
