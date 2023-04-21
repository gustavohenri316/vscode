import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background: #2a273f;
  height: 2rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: #908caa;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding:  0.5rem;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: #908caa;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }
`;
