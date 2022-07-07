import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --button: #3a74f1;
    --background: #d1d7e5;
    --forma: #ffffff;
    --divisor: #e9e9e9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    background: var(--background);
    height: 100%;
    -webkit-font-smoothing: antialiased;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body, button {
    font-family: 'Poppins', sans-serif;
  }
`