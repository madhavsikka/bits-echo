import { createGlobalStyle } from "styled-components"
import TransitionStyles from "./TransitionStyles"
import theme from "./theme"
// import media from "./media"
const { fontSizes } = theme

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    font-family: Montserrat;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: inherit;
  }

  .contentClass {
    width: 900px;
    font-size: ${fontSizes.l2};
    text-align: justify;
    line-height: 2rem;
    img:nth-child(2n+1) {
      width: 400px;
      float: left;
      margin: 0 1rem 0 0;
    }
    img:nth-child(2n+2) {
      width: 400px;
      float: right;
      margin: 0;
    }
  }

  ${TransitionStyles}
  
`

export default GlobalStyle
