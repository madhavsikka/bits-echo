import React from "react"
import styled from "styled-components"
import { theme } from "../styles/index"
const { colors, fontSizes } = theme

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: inherit;
  background: ${colors.green};
  color: ${colors.white};
  font-size: ${fontSizes.l4};
  font-weight: 600;
  height: 110px;
  padding: 2.5rem 5rem 2.5rem 11rem;
  user-select: none;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      font-weight: 500;
      margin: 0;
      padding: 0;
    }
  }
  p {
    font-weight: 400;
  }
`

const Navbar = () => {
  return (
    <StyledNav>
      <div>
        <p>ALUMNI</p>
        <p>RELATIONS</p>
        <p>DIVISION</p>
      </div>
      <p>ARCHIVE</p>
    </StyledNav>
  )
}

export default Navbar
