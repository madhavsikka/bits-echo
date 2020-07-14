import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { theme } from "../../styles/index"
const { colors } = theme

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  grid-gap: 2rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 1rem;
`

const Tile = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  transition: all 100ms;
  box-shadow: 0 0 5px lightgray;
  min-height: 320px;
  :hover {
    box-shadow: 0 5px 8px lightgray;
    transform: translateY(-3px);
  }
`

const StyledImg = styled(Img)`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 200px;
`

const StyledContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  padding: 1rem;
  overflow: hidden;
  div {
    text-align: center;
    color: ${colors.green};
    font-weight: 600;
    font-size: 17px;
  }
`

const StyledType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.green};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  color: ${colors.white};
  font-weight: 600;
  height: 30px;
  text-transform: capitalize;
`

const Mosaic = ({ articles }) => {
  return (
    <StyledGrid>
      {articles.map(article => (
        <StyledLink to={`Article_${article.id}`} key={article.id}>
          <Tile type={article.type}>
            <StyledImg fluid={article.cover.childImageSharp.fluid} alt="" />
            <StyledContent>
              <div>{article.title}</div>
            </StyledContent>
            <StyledType>{article.type.replace(/_/g, " ")}</StyledType>
          </Tile>
        </StyledLink>
      ))}
    </StyledGrid>
  )
}

export default Mosaic
