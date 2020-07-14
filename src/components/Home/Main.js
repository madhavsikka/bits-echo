import React from "react"
import styled from "styled-components"
import { IoMdArrowRoundForward } from "react-icons/io"
import { ClockTower } from "../../images/index"
import { theme, media } from "../../styles/index"
const { colors, fontSizes } = theme

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 110px);
  padding: 0 3rem;
  background: ${colors.green};

  ${media.desktop`justify-content: center;`};
  ${media.thone`padding: 0;`};
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2rem;
  ${media.desktop`align-items: center;`};
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${colors.white};
  padding: 5rem 0;
  ${media.desktop`padding: 1rem;`};
  ${media.tiny`padding: 0rem;`};

  p {
    font-weight: 800;
    font-size: ${fontSizes.l10};
    user-select: none;
    margin: 0;
    line-height: 165px;

    ${media.desktop`text-align: center;`};
    ${media.thone`font-size: ${fontSizes.l9};line-height: 135px;`};
    ${media.phablet`font-size: 120px;line-height: 115px;`};
    ${media.phone`font-size: 100px;line-height: 100px;`};
    ${media.tiny`font-size: 90px;line-height: 90px;`};

    :nth-child(2) {
      color: ${colors.yellow};
    }
    :last-child {
      margin: 25px 0 0 11px;
      line-height: 30px;
      font-weight: 600;
      font-size: ${fontSizes.l4};
      ${media.desktop`margin: 25px 0 45px;`};
      ${media.phablet`font-size: 18px;line-height: 18px;`};
      ${media.phone`font-size: 16px;line-height: 16px;`};
      ${media.tiny`font-size: 14px;line-height: 14px;`};
    }
  }
  ${media.desktop`justify-content: center;`};
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
  ${media.desktop`display: none;`};
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
  ${media.phone`font-size: 16px;`};
  ${media.tiny`font-size: 14px;`};
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
