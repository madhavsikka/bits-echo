import React from "react"
import styled from "styled-components"
import { BITSLogo } from "../images/index"
import { Link } from "gatsby"
import { theme, media } from "../styles/index"
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

  ${media.thone`padding: 2.5rem 2rem 2.5rem 6.7rem;`};
  ${media.phablet`font-size: ${fontSizes.l3};`};
  ${media.phone`padding: 2.5rem 1rem 2.5rem 5.3rem; font-size: 16px;`};
  ${media.tiny`font-size: 14px;`};

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

const StyledLogoLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
`

const Bookmark = styled.div`
  position: absolute;
  top: 0;
  left: 5rem;
  width: 0;
  height: 145px;
  border-right: 40px solid ${colors.white};
  border-left: 40px solid ${colors.white};
  border-bottom: 20px solid transparent;

  ${media.thone`left: 1rem;`};
  ${media.phone`height: 120px; border-right-width: 30px; border-left-width: 30px;`};
`

const LogoContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center !important;
  top: 0.6rem;
  left: 5.656rem;
  ${media.thone`left: 1.656rem;`};
  ${media.phone`left: 1.5rem;`};
  img {
    width: 60px;
    margin-bottom: 7px;
    ${media.phone`width: 45px;`};
  }
  p {
    font-weight: 600;
    margin: 0;
    color: ${colors.green};
    font-size: ${fontSizes.l2};
    ${media.phone`font-size: 14px;`};
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  transition: all 100ms;
  display: inline-block;
  :hover {
    color: ${colors.yellow};
    transform: scale(1.1);
  }
`

const Navbar = () => {
  return (
    <StyledNav>
      <StyledLogoLink to="/">
        <Bookmark />
        <LogoContainer>
          <img src={BITSLogo} alt="Logo" />
          <p>BITS</p>
          <p>Pilani</p>
        </LogoContainer>
        <div>
          <p>ALUMNI</p>
          <p>RELATIONS</p>
          <p>DIVISION</p>
        </div>
      </StyledLogoLink>
      <p>
        <StyledLink to="/archive" activeStyle={{ color: colors.yellow }}>
          ARCHIVE
        </StyledLink>
      </p>
    </StyledNav>
  )
}

export default Navbar
