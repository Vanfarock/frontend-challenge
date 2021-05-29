import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    color: ${(props) => props.theme.defaultFontColor};
  }

  body {
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export default GlobalStyle;
