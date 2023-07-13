import { FC } from 'react';

import { MainWrapper } from './components/LayoutComponents/MainWrapper';
import { HeroSection } from './components/SectionComponents/HeroSection/HeroSection';
import { DailyInfoSection } from './components/SectionComponents/DailyInfoSection/DailyInfoSection';

const App: FC = () => {
  return (
    <MainWrapper>
      <HeroSection />
      <DailyInfoSection />
    </MainWrapper>
  );
};

export default App;
