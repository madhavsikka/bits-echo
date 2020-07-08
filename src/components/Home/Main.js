import React from "react"
import styled from "styled-components"
import { IoMdArrowRoundForward } from "react-icons/io"
import { ClockTower, BITSLogo } from "../../images/index"
import { theme } from "../../styles/index"
const { colors, fontSizes } = theme

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 110px);
  padding: 0 4rem;
  background: ${colors.green};
`

const Bookmark = styled.div`
  position: absolute;
  top: 0;
  left: 5rem;
  width: 0;
  height: 140px;
  border-right: 40px solid ${colors.white};
  border-left: 40px solid ${colors.white};
  border-bottom: 20px solid transparent;
`

const LogoContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  top: 0.6rem;
  left: 5.65rem;
  img {
    width: 60px;
    margin-bottom: 7px;
  }
  p {
    font-weight: 600;
    margin: 0;
    color: ${colors.green};
    font-size: ${fontSizes.l2};
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2rem;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${colors.white};
  padding: 5rem 0;

  p {
    font-weight: 800;
    font-size: ${fontSizes.l10};
    user-select: none;
    margin: 0;
    line-height: 165px;
    :nth-child(2) {
      color: ${colors.yellow};
    }
    :last-child {
      margin: 25px 0 0 11px;
      line-height: 30px;
      font-weight: 600;
      font-size: ${fontSizes.l4};
    }
  }
`

const ClockTowerContainer = styled.div`
  user-select: none;
  align-self: flex-end;
  height: 700px;
  overflow: hidden;
  img {
    max-height: 100%;
    width: auto;
  }
`

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 9px;
  border-radius: 5px;
  padding: 1rem;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background: transparent;
  font-family: inherit;
  font-size: ${fontSizes.l3};
  font-weight: 600;
  transition: all 100ms;
  :active,
  :focus {
    outline: none;
  }
  :hover {
    background: ${colors.white};
    color: ${colors.green};
  }
`

const Main = () => {
  return (
    <MainContainer>
      <Bookmark />
      <LogoContainer>
        <img src={BITSLogo} alt="Logo" />
        <p>BITS</p>
        <p>Pilani</p>
      </LogoContainer>
      <ContentContainer>
        <TitleContainer>
          <p>BITS</p>
          <p>ECHO</p>
          <p>The Official BITS Pilani Newsletter</p>
        </TitleContainer>
        <StyledButton>
          Read The Latest Issue
          <IoMdArrowRoundForward
            style={{
              width: "25px",
              height: "25px",
              strokeWidth: "3px",
              marginLeft: "15px",
            }}
          />
        </StyledButton>
      </ContentContainer>
      <ClockTowerContainer>
        <img src={ClockTower} alt="ClockTower" />
      </ClockTowerContainer>
    </MainContainer>
  )
}

export default Main
