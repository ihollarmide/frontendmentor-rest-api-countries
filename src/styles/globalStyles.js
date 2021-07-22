import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  -webkit-tap-highlight-color: transparent;

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    min-height: 100vh;
    font-family: 'Nunito Sans', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 300;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    /* transition: background-color .5s ease-in-out, color .5s ease-in-out; */
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: 0;
  }
`