import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { theme } from "../../styles/index"
const { colors, fontSizes } = theme

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  grid-gap: 2rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  transition: all 100ms;
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
    :nth-child(1) {
      text-align: center;
      color: ${colors.green};
      font-weight: 600;
      font-size: 17px;
    }
    :nth-child(2) {
      padding: 0 10px;
      text-align: justify;
      margin-top: 1rem;
      color: grey;
      font-weight: 500;
      font-size: ${fontSizes.l1};
      line-height: 1.5;
    }
  }
`

const Mosaic = ({ articles }) => {
  return (
    <StyledGrid>
      {articles.map(article => (
        <Tile type={article.type}>
          <StyledLink to={`Article_${article.id}`} key={article.id}>
            <StyledImg fluid={article.cover.childImageSharp.fluid} alt="" />
            <StyledContent>
              <div>{article.title}</div>
            </StyledContent>
          </StyledLink>
        </Tile>
      ))}
    </StyledGrid>
  )
}

export default Mosaic
