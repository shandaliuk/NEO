import { Typography, Container } from '@mui/material';

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
          near earth objects
        </Typography>
        <Typography
          sx={{
            fontFamily: 'inherit',
            maxWidth: '608px',
            marginLeft: 'auto',
          }}
          align="right"
        >
          comets and asteroids that have been nudged by the gravitational attraction of
          nearby planets into orbits that allow them to enter the Earth's neighborhood.
        </Typography>
      </Container>
    </Hero>
  );
};
