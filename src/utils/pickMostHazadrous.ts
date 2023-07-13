import { AssembledInfo } from 'types/AssembledInfo';

export const pickMostHazardous = (info: AssembledInfo[]) => {
  const hazardousSortedInfo = info.sort(
    (a: AssembledInfo, b: AssembledInfo) => b.hazardousNeoCounter - a.hazardousNeoCounter
  );
  return hazardousSortedInfo.slice(0, 2);
};
