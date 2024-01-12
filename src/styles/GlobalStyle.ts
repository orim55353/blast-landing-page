import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.families.inter};
  }

  body {
    margin: unset;
    color: #ffffff;
    background-color: #171717;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  img,
  picture,
  svg,
  canvas {
    display: block;
    max-inline-size: 100%;
    block-size: auto;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    line-height: 1.75;
    margin: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
