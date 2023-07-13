import { FC, useEffect, useState } from 'react';
import format from 'date-fns/format';
import { Container, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';

import { fetchDailyInfo } from '../../../services/neoApi/neoApi';
import { formulateInfo } from '../../../utils/formulateInfo';

import { AssembledInfo } from '../../../types/AssembledInfo';

export const DailyInfoSection: FC = () => {
  const [date, setDate] = useState<string>(() => {
    return format(Date.now(), 'yyyy-MM-dd');
  });

  const [assembledInfo, setAssembledInfo] = useState<AssembledInfo[]>([]);

  useEffect(() => {
    const setCurrentDayInfo = async () => {
      return await fetchDailyInfo(date);
    };

    setCurrentDayInfo()
      .then((info) => setAssembledInfo((state) => [...state, formulateInfo(info)]))
      .catch((err) => console.log(err));
  }, [date]);

  console.log(assembledInfo);

  return (
    <section>
      <Container>
        <h2 className="visually-hidden">daily near earth objects information</h2>
        <ul>
          {assembledInfo.map((item, index) => {
            return (
              <li key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <p>card</p>
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};
