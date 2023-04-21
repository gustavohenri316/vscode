import styled from "styled-components";

export const ExplorerContainer = styled.div`
  width: 21rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;
export const TitleContainer = styled.div`
  display: flex;
  color: #908caa;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  border-bottom: 0.5px solid #817c9c26;
  h5 {
    width: 100%;
    font-weight: normal;
  }
`;
export const ButtonContainer = styled.div`
  color: #908caa;
  button {
    margin-top: 0.875rem;
    background: transparent;
    border: 0;
    color: #908caa;
    display: flex;
    align-items: center;
    gap: 1rem;

    cursor: pointer;
    svg {
      font-size: 1rem;
    }
  }
`;
export const SubContainer = styled.div`
  padding-left: 1rem;
  button {
    font-size: 0.9rem;
  }
`;
export const SubContent = styled.div`
  padding-left: 2rem;
`;
