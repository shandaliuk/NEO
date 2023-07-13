import { FC } from 'react';

import { AssembledInfo } from 'types/AssembledInfo';

import { CardItem } from '../CardItem';

import { InfoCardList } from './CardList.styled';

interface CardListProps {
  assembledInfo: AssembledInfo[];
}

export const CardList: FC<CardListProps> = ({ assembledInfo }) => {
  return (
    <InfoCardList>
      {assembledInfo.map((info, index) => {
        return (
          <li key={index}>
            <CardItem info={info} />
          </li>
        );
      })}
    </InfoCardList>
  );
};
