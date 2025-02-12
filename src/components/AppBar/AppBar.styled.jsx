import styled from '@emotion/styled';
import { device } from '../../App.styled';

export const Header = styled.header`
  padding: 20px;
  max-width: 850px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background-color: var(bg);

  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;

  backdrop-filter: blur(5px);

  @media ${device.tablet} {
    padding: 20px 40px;
  }
`;