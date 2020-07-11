import React from "react"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import { BackIcon, StyledLink } from "../styles/shared"
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
  padding: 2rem;
  margin-bottom: 2rem;
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ArticleTemplate = ({ data }) => {
  return (
    <Layout>
      <StyledLink to="../">
        <BackIcon />
      </StyledLink>
      <StyledBanner>{data.strapiArticle.title}</StyledBanner>
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
      category
      content
    }
  }
`
