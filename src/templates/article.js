import React from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import { BackIcon, StyledLink } from "../styles/shared"
import { Sharebar } from "../components/Archive/index"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { theme } from "../styles/index"
const { colors, fontSizes } = theme

const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.green};
  font-size: ${fontSizes.l7};
  color: ${colors.yellow};
  font-weight: 600;
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  div {
    width: 350px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: ${colors.white};
  }
  svg {
    transition: all 100ms;
    :hover {
      transform: scale(1.2);
    }
  }
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 1rem;
  blockquote {
    display: block;
    background: ${colors.clearGreen};
    border-radius: 5px;
    padding: 1rem;
    margin: 0;
    font-style: italic;
    border-left: 7px solid ${colors.green};
  }
`

const ArticleTemplate = ({ data }) => {
  return (
    <Layout>
      <StyledLink to="../">
        <BackIcon />
      </StyledLink>
      <StyledBanner>
        <p>{data.strapiArticle.title}</p>
        <Sharebar title={data.strapiArticle.title} />
      </StyledBanner>
      <ContentContainer>
        <ReactMarkdown
          source={data.strapiArticle.content}
          transformImageUri={uri =>
            uri.startsWith("http") ? uri : `${process.env.IMAGE_BASE_URL}${uri}`
          }
          className="contentClass"
          escapeHtml={false}
        />
      </ContentContainer>
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      type
      content
    }
  }
`
