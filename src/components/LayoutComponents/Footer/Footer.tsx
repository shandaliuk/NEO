import { MainFooter, FooterIcon, FooterText, FooterLink } from './Footer.styled';

import text from 'data/text.json';
import sprite from 'assets/icons/sprite.svg';

export const Footer = () => {
  return (
    <MainFooter>
      <FooterIcon>
        <use href={sprite + '#icon-audio'}></use>
      </FooterIcon>
      <FooterText>
        {text.footer.text}
        <FooterLink
          href="https://github.com/shandaliuk"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {text.footer.link}
        </FooterLink>
      </FooterText>
    </MainFooter>
  );
};
