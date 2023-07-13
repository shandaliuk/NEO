import { SiteLogoWrapper, SiteLogoIcon, SiteLogoText } from './Logo.styled';

import sprite from 'assets/icons/sprite.svg';

export const Logo = () => {
  return (
    <SiteLogoWrapper>
      <SiteLogoIcon>
        <use href={sprite + '#icon-logo'}></use>
      </SiteLogoIcon>
      <SiteLogoText>NEO</SiteLogoText>
    </SiteLogoWrapper>
  );
};
