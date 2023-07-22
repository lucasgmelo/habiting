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
    ::-webkit-scrollbar {
      width: 16px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.gray};
      background-clip: content-box;

      border: 5px solid transparent;
      border-radius: 100px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #8295b6;
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
      font-size: ${theme.font.sizes.xlarge};
      font-weight: 500;
    }

    h2 {
      font-weight: 400;
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.gray};
    }

    h3 {
      font-weight: 400;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.gray};
    }
  `}
`;

export default GlobalStyles;
