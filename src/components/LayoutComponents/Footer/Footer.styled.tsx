import styled from 'styled-components';

export const MainFooter = styled.footer`
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterIcon = styled.svg`
  width: 36px;
  height: 22px;
  margin-bottom: 18px;
`;

export const FooterText = styled.p`
  font-size: 22px;
`;

export const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.accent};
`;
