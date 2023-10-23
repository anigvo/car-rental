import React from 'react';
import {
  FooterWrap,
  FooterText,
  FooterLink,
  FooterItem,
  FooterList,
} from './Footer.styled';
export const Footer = () => {
  return (
    <FooterWrap>
      <FooterText>Have questions? Contact Us!</FooterText>
      <FooterList>
        <FooterItem>
          Telegram:
          <FooterLink href="https://t.me/carrentalreal">
            @carRentalReal
          </FooterLink>
        </FooterItem>
        <FooterItem>
          Phone:
          <FooterLink href="tel:+380991111111">+38 (099) 111 11 11</FooterLink>
        </FooterItem>
        <FooterItem>
          Mail:
          <FooterLink href="carrentalreal@mail.com">
            carrentalreal@mail.com
          </FooterLink>
        </FooterItem>
      </FooterList>
    </FooterWrap>
  );
};
