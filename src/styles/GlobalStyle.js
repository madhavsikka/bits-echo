import { createGlobalStyle } from "styled-components"
import TransitionStyles from "./TransitionStyles"
import theme from "./theme"
// import media from "./media"
const { colors } = theme

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
    width: 1200px;
    font-size: 17px;
    text-align: justify;
    line-height: 2rem;
    column-count: 2;
    column-gap: 3rem;
    column-width: 500px;
    column-rule: 1px solid ${colors.green};
    img {
      width: auto;
      float: left;
      max-width: 400px;
      max-height: 300px;
      margin: 5px 1rem 5px 0;
      border-radius: 5px;
    }
  }

  .previewContent {
    font-size: 15px !important;
    color: grey !important;
    font-weight: 400 !important;
  }

  ${TransitionStyles}
`

export default GlobalStyle
