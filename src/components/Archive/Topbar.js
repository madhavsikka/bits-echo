import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { BITSLogo } from "../../images"
import { theme } from "../../styles/index"
const { colors, fontSizes } = theme

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 70px;
  color: ${colors.white};
  background: ${colors.green};
  font-size: ${fontSizes.l3};
  font-weight: 600;
`
const StyledLogoLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
`
const LogoNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    margin-right: 20px;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.yellow};
  font-weight: 400;
  transition: all 100ms;
  :hover {
    transform: scale(1.1);
  }
`

const Topbar = () => {
  return (
    <Nav>
      <StyledLogoLink to="/">
        <LogoNameContainer>
          <img src={BITSLogo} alt="logo" />
          <p>ALUMNI RELATIONS DIVISION</p>
        </LogoNameContainer>
      </StyledLogoLink>
      <StyledLink to="/archive">ARCHIVE</StyledLink>
    </Nav>
  )
}

export default Topbar
