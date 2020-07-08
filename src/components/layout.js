import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar"
import { GlobalStyle } from "../styles/index"

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <Root>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
    </Root>
  )
}

export default Layout
