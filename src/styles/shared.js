import styled from "styled-components"
import { Link } from "gatsby"
import { IoMdArrowRoundBack } from "react-icons/io"
import { theme, media } from "../styles/index"
const { colors } = theme

const BackIcon = styled(IoMdArrowRoundBack)`
  display: flex;
  position: absolute;
  top: 40px;
  left: 25px;
  width: 38px;
  height: auto;
  color: ${colors.white};
  transition: all 100ms;
  :hover {
    color: ${colors.yellow};
    transform: scale(1.2);
  }
  ${media.tablet`width: 34px; top: 37px; left: 20px;`};
  ${media.thone`width: 30px; top: 15px; left: 10px;`};
`
const StyledLink = styled(Link)`
  text-decoration: none;
`

export { BackIcon, StyledLink }
