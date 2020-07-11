import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { theme } from "../../styles/index"
const { colors, fontSizes } = theme

const StyledCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding: 0;
  box-shadow: 0 0 7px lightgrey;
  border-radius: 5px;
  width: ${props => (props.width ? props.width : "300px")};
  height: ${props => (props.height ? props.height : "400px")};
  transition: all 100ms;
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 12px lightgrey;
  }
`

const StyledImg = styled(Img)`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex-grow: 1;
  padding: 0;
`

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  font-size: ${fontSizes.l2};
  color: ${colors.green};
  padding: 0.6rem;
`

// const StyledSubTitle = styled(StyledTitle)`
//   width: 100%;
//   flex-direction: row;
//   justify-content: space-between;
// `

const StyledDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSizes.l1};
  font-weight: 600;
  color: white;
  background: ${colors.green};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 30px;
`

const Card = ({ width, height, node }) => {
  return (
    <StyledCard width={width} height={height}>
      <StyledImg fixed={node.cover.childImageSharp.fixed} alt="" />
      <StyledContent>
        {/* <StyledTitle>
          BITS Echo
          <StyledSubTitle>
            <div>Volume</div>
            <div>Issue</div>
          </StyledSubTitle>
        </StyledTitle> */}
        <StyledTitle>{node.title}</StyledTitle>
        <StyledDate>{node.date}</StyledDate>
      </StyledContent>
    </StyledCard>
  )
}

export default Card
