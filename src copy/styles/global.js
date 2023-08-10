import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #F2F2F2;

    @media only screen and (max-width: 600px) {
    height: auto;
  }
}

:root {
  --green: #05A64B;
  --red: #D92332;
  --yellow: #D99B29;
  --dark: #0D0D0D;
  --white: #F2F2F2;
}

`;

export default GlobalStyle;
