import styled from "styled-components";

export const MyLinksContainer = styled.div`
  position: fixed;
  background: #2a273f;
  padding: 1rem;
  margin-left: 5rem;
  margin-top: -7rem;
  border-radius: 10px;

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    text-decoration: none;
    color: #908caa;
    transition: all 0.5s;

    &:hover {
      color: white;
    }
  }
`