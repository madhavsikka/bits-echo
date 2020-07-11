import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import { theme } from "../../styles/index"
const { colors, fontSizes } = theme

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-gap: 2rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Tile = styled.div`
  /* width: 300px; */
  padding-bottom: 1rem;
  max-height: 490px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  box-shadow: 0 0 10px lightgray;
  transition: all 100ms;
  :hover {
    box-shadow: 0 6px 10px lightgray;
    transform: translateY(-3px);
  }
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.clearGreen};
`

const StyledImg = styled(Img)`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
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
      font-size: ${fontSizes.l2};
    }
    :nth-child(2) {
      padding: 0 10px;
      text-align: justify;
      margin-top: 1rem;
      color: grey;
      font-weight: 500;
      font-size: ${fontSizes.l1};
    }
  }
`

const Mosaic = ({ articles }) => {
  return (
    <StyledGrid>
      {articles.map(article => (
        <StyledLink to={`Article_${article.id}`}>
          <Tile key={article.id}>
            <ImgContainer>
              <StyledImg fixed={article.cover.childImageSharp.fixed} alt="" />
            </ImgContainer>
            <StyledContent>
              <div>{article.title}</div>
              <div>
                <ReactMarkdown
                  source={article.content}
                  disallowedTypes={[
                    "image",
                    "link",
                    "linkReference",
                    "imageReference",
                  ]}
                  escapeHtml={false}
                />
              </div>
              {/* <div>{`${article.content.substr(0, 250)}.....`}</div> */}
            </StyledContent>
          </Tile>
        </StyledLink>
      ))}
    </StyledGrid>
  )
}

export default Mosaic
