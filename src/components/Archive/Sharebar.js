import React from "react"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
import styled from "styled-components"
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa"
import { useLocation } from "@reach/router"
import { theme } from "../../styles/index"
const { colors } = theme

const StyledBar = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${colors.white};
  svg {
    transition: all 100ms;
    :hover {
      transform: scale(1.2);
    }
  }
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
        <FaFacebookSquare style={{ width: "30px", height: "auto" }} />
      </FacebookShareButton>
      <TwitterShareButton
        url={location.href}
        title={title}
        style={{ outline: "none" }}
      >
        <FaTwitterSquare style={{ width: "30px", height: "auto" }} />
      </TwitterShareButton>
      <LinkedinShareButton
        url={location.href}
        title={title}
        style={{ outline: "none" }}
      >
        <FaLinkedin style={{ width: "30px", height: "auto" }} />
      </LinkedinShareButton>
    </StyledBar>
  )
}

export default Sharebar
