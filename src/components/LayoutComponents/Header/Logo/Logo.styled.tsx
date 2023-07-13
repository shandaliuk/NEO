import styled from 'styled-components';

export const SiteLogoWrapper = styled.div`
  display: flex;
  gap: 10px;
  color: ${(props) => props.theme.colors.primary};
`;

export const SiteLogoIcon = styled.svg`
  width: 25px;
  height: 40px;
`;

export const SiteLogoText = styled.p`
  font-size: 30px;
`;
