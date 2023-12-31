import { Container } from '@mui/material';

import { Logo } from './Logo';

import { MainHeader } from './Header.styled';

export const Header = () => {
  return (
    <MainHeader>
      <Container>
        <Logo />
      </Container>
    </MainHeader>
  );
};
