import React from "react"
import styled from "styled-components"
import { theme } from "../../styles/index"
const { colors } = theme

const SideContainer = styled.aside`
  position: absolute;
  top: calc(230px + 110px);
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${colors.clearGreen};
  padding: 2rem 0;
  width: 300px;
  height: 100%;
`

const StyledLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${colors.green};
  font-weight: 700;
  /* background: ${colors.green}; */
  height: 30px;
  /* width: 100px; */
  width: 100%;
  padding: 10px;
`

const Sidebar = ({ edges }) => {
  return (
    <SideContainer>
      {edges.map(({ node }) => (
        <>
          <StyledLabel>{`Volume ${node.volume}`}</StyledLabel>
          <p>{`Issue ${node.issue}`}</p>
        </>
      ))}
    </SideContainer>
  )
}

export default Sidebar
