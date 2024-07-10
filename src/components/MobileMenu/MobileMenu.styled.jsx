import styled from '@emotion/styled';

export const MenuBtn = styled.button`
  position: relative;
  z-index: 10;

  width: 30px;
  height: 24px;

  transition: transform 250ms ease-in-out;

  background-color: transparent;
  border: none;
  overflow: hidden;

  cursor: pointer;

  &::before {
    content: '';
    position: absolute`;