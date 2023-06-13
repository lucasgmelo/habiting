import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: "Poppins", sans-serif;
    }

    html,
    body,
    #__next {
      height: 100%;
    }
    body {
      background-color: ${theme.colors.mainBg};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.black};
    }

    h1 {
      font-size: ${theme.font.sizes.large};
      font-weight: 500;
    }

    h3 {
      font-weight: 400;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.gray};
    }
  `}
`;

export default GlobalStyles;
