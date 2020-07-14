import React from "react"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
import styled from "styled-components"
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa"
import { useLocation } from "@reach/router"
import { theme, media } from "../../styles/index"
const { colors } = theme

const StyledBar = styled.div`
  width: 350px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${colors.white};
  svg {
    width: 30px;
    height: auto;
    transition: all 100ms;
    :hover {
      transform: scale(1.2);
    }
    ${media.phablet`width: 25px;`};
  }
  ${media.phablet`width: 280px;`};
`

const Sharebar = ({ title }) => {
  const location = useLocation()
  return (
    <StyledBar>
      <FacebookShareButton
        url={location.href}
        title={title}
        style={{ outline: "none" }}
      >
        <FaFacebookSquare />
      </FacebookShareButton>
      <TwitterShareButton
        url={location.href}
        title={title}
        style={{ outline: "none" }}
      >
        <FaTwitterSquare />
      </TwitterShareButton>
      <LinkedinShareButton
        url={location.href}
        title={title}
        style={{ outline: "none" }}
      >
        <FaLinkedin />
      </LinkedinShareButton>
    </StyledBar>
  )
}

export default Sharebar
