import { FC } from 'react';

import { AssembledInfo } from 'types/AssembledInfo';

import { pickMostHazardous } from 'utils/pickMostHazadrous';

import { CardItem } from '../CardItem';

import { InfoCardList } from './CardList.styled';

interface CardListProps {
  assembledInfo: AssembledInfo[];
}

export const CardList: FC<CardListProps> = ({ assembledInfo }) => {
  const twoMostHazardousNeos = pickMostHazardous([...assembledInfo]);
  return (
    <InfoCardList>
      {assembledInfo.map((info, index) => {
        return (
          <li key={index}>
            <CardItem info={info} isMostHazardous={twoMostHazardousNeos.includes(info)} />
          </li>
        );
      })}
    </InfoCardList>
  );
};
