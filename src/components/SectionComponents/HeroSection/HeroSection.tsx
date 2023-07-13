import { Typography, Container } from '@mui/material';

import text from 'data/text.json';
import { Hero } from './HeroSection.styled';

export const HeroSection = () => {
  return (
    <Hero>
      <Container>
        <Typography
          variant="h1"
          sx={{ fontFamily: 'inherit', marginBottom: '20px' }}
          align="right"
        >
          {text.hero.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'inherit',
            maxWidth: '608px',
            marginLeft: 'auto',
          }}
          align="right"
        >
          {text.hero.text}
        </Typography>
      </Container>
    </Hero>
  );
};
