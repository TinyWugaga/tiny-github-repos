import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    font-size: 14px;
    line-height: 1.5;
    color: ${({theme}) => theme.typography.color.light};
    background-color: ${({theme}) => theme.palette.background};

    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  }

  * {
    box-sizing: border-box;
  }

  button, input {
    overflow: visible;
  }

  ul, ol {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
  }

  a {
    color: ${({ theme }) => theme.palette.info};
    text-decoration: none;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
  }

  p {
    margin-top: 0;
  }
`
