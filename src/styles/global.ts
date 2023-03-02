import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}

  body {
    background: ${(props) => props.theme["--background"]};
    color: ${(props) => props.theme["--gray-100"]};
    -webkit-font-smoothing: antialiased;    
  }
  button {
    border: none;
  }
  body, input, textarea, button {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
`;
