import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: white;
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 15%;
  color: #908caa;
  padding: 12px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;

  svg {
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
export const Options = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 13px;
  padding-left: 1rem;
  color: #908caa;
  transition: all 0.6s;

  span {
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;
