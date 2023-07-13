import styled from 'styled-components';

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5px 0;
  font-size: 20px;
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
`;

export const InfoPart = styled.span`
  color: ${(props) => props.theme.colors.accent};
`;
