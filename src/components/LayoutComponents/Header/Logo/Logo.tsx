import { SiteLogoWrapper, SiteLogoIcon, SiteLogoText } from './Logo.styled';

import text from 'data/text.json';
import sprite from 'assets/icons/sprite.svg';

export const Logo = () => {
  return (
    <SiteLogoWrapper>
      <SiteLogoIcon>
        <use href={sprite + '#icon-logo'}></use>
      </SiteLogoIcon>
      <SiteLogoText>{text.logo}</SiteLogoText>
    </SiteLogoWrapper>
  );
};
