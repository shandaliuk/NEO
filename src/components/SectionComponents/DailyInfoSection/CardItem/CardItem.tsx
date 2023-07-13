import { FC } from 'react';
import { Card } from '@mui/material';
import { CardContent, CardMedia } from '@mui/material';

import { AssembledInfo } from 'types/AssembledInfo';

import { InfoList, InfoItem, InfoPart } from './CardItem.styled';

import text from 'data/text.json';
import asteroid from 'assets/images/asteroid.png';

interface CardItemProps {
  info: AssembledInfo;
}

export const CardItem: FC<CardItemProps> = ({ info }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: '#050505',
      }}
    >
      <CardMedia
        component="img"
        height="133"
        image={asteroid}
        alt="asteroid"
        sx={{
          objectFit: 'contain',
          rotate: `${Math.floor(info.maxEstDiameter * 200)}deg`,
        }}
      />
      <CardContent>
        <InfoList>
          <InfoItem>
            {text.dailyInfo.info.diameter}&nbsp;
            <InfoPart>{info.maxEstDiameter.toFixed(3)}km.</InfoPart>
          </InfoItem>
          <InfoItem>
            {text.dailyInfo.info.hazardous}&nbsp;
            <InfoPart>{info.hazardousNeoCounter}</InfoPart>
          </InfoItem>
          <InfoItem>
            {text.dailyInfo.info.closest}&nbsp;
            <InfoPart>{Math.round(info.closestNeo)}km.</InfoPart>
          </InfoItem>
          <InfoItem>
            {text.dailyInfo.info.fastest}&nbsp;
            <InfoPart>{Math.round(info.fastestNeo)}km/h.</InfoPart>
          </InfoItem>
        </InfoList>
      </CardContent>
    </Card>
  );
};
