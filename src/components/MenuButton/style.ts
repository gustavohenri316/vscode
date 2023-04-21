import styled from "styled-components";

type MenuButtonProps = {
  active?: boolean;
};
export const MenuButtonContainer = styled.div<MenuButtonProps>`
  background-color: transparent;
  width: 4rem;
  height: 4rem;
  border: 0;
  color: #908caa;
  transition: all .6s;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  border-left: ${({ active }) =>
    active ? "2px solid white" : "2px solid transparent"};
  svg {
    font-size: 28px;
  }

  &:hover {
    border-left: 2px solid white;
    color: white;
  }
`;
