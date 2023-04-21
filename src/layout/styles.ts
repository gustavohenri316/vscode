import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
export const Content = styled.div`
  width: 90%;
  height: 80%;
  background: #232136;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ContetPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: #232136;
`;
export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 100%;
`;
export const Button = styled.button`
  max-width: 150px;
  height: 10px;
  position: absolute;
  background: #817c9c14 ;
  border: 0;
  border-radius: 5px;
  color: white;
  font-size: 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem
  }
`;
