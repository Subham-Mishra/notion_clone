import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #FFFEFC;
    font-family: 'Nunito', Segoe UI, Helvetica Neue, sans-serif;
  }

  input {
    outline: none;
    border: none;
    padding: 12px 15px 12px 30px;
    background: hsla(0,0%,98%,.05);
    box-shadow: 0 6px 18px rgb(0 0 0 / 6%);
    border-radius: 8px;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }


`;

export default GlobalStyles;
