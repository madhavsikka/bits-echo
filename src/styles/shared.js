import styled from "styled-components"
import { Link } from "gatsby"
import { IoMdArrowRoundBack } from "react-icons/io"
import { theme } from "../styles/index"
const { colors } = theme

const BackIcon = styled(IoMdArrowRoundBack)`
  display: flex;
  position: absolute;
  top: 18px;
  left: 25px;
  width: 38px;
  height: auto;
  color: ${colors.white};
  transition: all 100ms;
  :hover {
    color: ${colors.yellow};
    transform: scale(1.2);
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
`

export { BackIcon, StyledLink }
