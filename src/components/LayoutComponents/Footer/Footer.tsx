import { MainFooter, FooterIcon, FooterText, FooterLink } from './Footer.styled';

import sprite from 'assets/icons/sprite.svg';

export const Footer = () => {
  return (
    <MainFooter>
      <FooterIcon>
        <use href={sprite + '#icon-audio'}></use>
      </FooterIcon>
      <FooterText>
        Developed by&nbsp;
        <FooterLink
          href="https://github.com/shandaliuk"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          shandaliuk
        </FooterLink>
      </FooterText>
    </MainFooter>
  );
};
