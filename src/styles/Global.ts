import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
    ::-webkit-scrollbar {
      width: 20px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
     }
    ::-webkit-scrollbar-thumb {
      background-color: #2b283b;
      border: 3px solid transparent;
    }
  }
  body {
    background: rgb(85,25,124);
    background: linear-gradient(90deg, rgba(85,25,124,1) 0%, rgba(107,202,255,1) 42%, rgba(72,0,255,1) 100%);
    font-family: 'Inter', sans-serif;
  }

  pre {
    height: 80%;
    max-height: 70vh;
  }
 
`;
