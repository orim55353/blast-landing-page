import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: unset;
    color: #ffffff;
    background-image: url("/backgrounds/lines.svg"),
      linear-gradient(135deg, #250d5f 0%, #4d22b2 100%);
    background-size: 118px, cover;
    background-position: center, 0% 0%;
    background-repeat: repeat, repeat;
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
    block-size: unset;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    line-height: 1.75;
    margin: 0;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  input:focus {
    outline: none;
  }

  .img-link {
    cursor: pointer;
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
