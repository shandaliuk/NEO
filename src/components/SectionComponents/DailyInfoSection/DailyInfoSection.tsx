import { FC, useEffect, useState } from 'react';
import { format, startOfMonth, add } from 'date-fns';
import { Container } from '@mui/material';

import { TIME_BREAK, LIST_LENGTH } from 'constants/constants';

import { fetchDailyInfo } from 'services/neoApi/neoApi';
import { formulateInfo } from 'utils/formulateInfo';
import { AssembledInfo } from 'types/AssembledInfo';

import { CardList } from './CardList';

import { DailySection } from './DailyInfoSection.styled';
import text from 'data/text.json';

export const DailyInfoSection: FC = () => {
  const [date, setDate] = useState<Date>(() => {
    return startOfMonth(Date.now());
  });

  const [assembledInfo, setAssembledInfo] = useState<AssembledInfo[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextDate = add(date, {
        days: 1,
      });

      if (nextDate < new Date()) {
        setDate(nextDate);
        return;
      }
      setDate(startOfMonth(Date.now()));
    }, TIME_BREAK);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    const setCurrentDayInfo = async () => {
      return await fetchDailyInfo(format(date, 'yyyy-MM-dd'));
    };

    setCurrentDayInfo()
      .then((info) => setAssembledInfo((state) => [...state, formulateInfo(info)]))
      .catch((err) => console.log(err));
  }, [date]);

  useEffect(() => {
    if (assembledInfo.length === LIST_LENGTH + 1) {
      setAssembledInfo((state) => [...state].slice(1, LIST_LENGTH + 1));
    }
  }, [assembledInfo.length]);

  return (
    <DailySection>
      <Container>
        <h2 className="visually-hidden">{text.dailyInfo.title}</h2>
        <CardList assembledInfo={assembledInfo} />
      </Container>
    </DailySection>
  );
};
