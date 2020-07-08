import { createGlobalStyle } from "styled-components"
import TransitionStyles from "./TransitionStyles"
// import theme from "./theme"
// import media from "./media"
// const { colors, fontSizes } = theme

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

  ${TransitionStyles}
  
`

export default GlobalStyle
